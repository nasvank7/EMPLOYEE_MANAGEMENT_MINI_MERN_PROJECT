import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Employee from "../model/employeeModel.js";
import jwt from 'jsonwebtoken'


const adminCred = {
  username: "nasvan",
  password: "1234",
};

const adminUsername = adminCred.username;

const authAdmin = asyncHandler(async (req, res) => {
  console.log(adminUsername);
  if (adminUsername === req.body.username) {
    if (adminCred.password === req.body.password) {
      let token =  jwt.sign({
        username: adminUsername,
      }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log(token,"/////////");
      res.status(200).json({ success: true,token:token })
     
      
    } else {
      throw new Error("Invalid password");
    }
  } else {
    throw new Error("Invalid Email");
  }
});
const addEmployee = asyncHandler(async (req, res) => {
  console.log(req.files,"///////reqfiles");
  const images = req.files;
  let cloudImageUrls = [];

  if (images && images.length > 0) {
    // Create an array of Promises for uploading images
    const uploadPromises = images.map(async (image) => {
      const result = await cloudinary.uploader.upload(image.path); // Upload image to Cloudinary
      return result.secure_url; // Return the secure URL
    });

    // Wait for all image uploads to complete
    cloudImageUrls = await Promise.all(uploadPromises);
  }

  console.log("Cloud Image URLs:", cloudImageUrls);

  const employee = new Employee({
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    designation: req.body.designation,
    gender: req.body.gender,
    course: req.body.course,
    image: cloudImageUrls,
  });

  await employee.save();
  res.status(200).send({ message: "Employee created successfully" });
});


const getEmployee = async (req, res) => {
  const employee = await Employee.find();
  console.log(employee);
  res.status(200).send(employee);
};

const updateEmployee = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  if (employee) {
    employee.username = req.body.username || employee.username;
    employee.email = req.body.email || employee.email;
    employee.mobile = req.body.mobile || employee.mobile;
    employee.designation = req.body.designation || employee.designation;
    employee.gender = req.body.gender || employee.gender;
    employee.course = req.body.course || employee.course;

    const updatedEmployee = await employee.save();
    res.status(200).json({
      _id: updatedEmployee._id,
      username: updatedEmployee.username,
      email: updatedEmployee.email,
      mobile: updatedEmployee.mobile,
      designation: updatedEmployee.designation,
      gender: updatedEmployee.gender,
      course: updatedEmployee.course,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json({ message: "Update User" });
});

const removeEmployee = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findByIdAndRemove(id);
  if (!employee) {
    res.status(404).send("Employee not found");
  }

  res.status(200).send(" deleted employee successfully");
});
const searchEmployee = asyncHandler(async (req, res) => {
  const username = req.body.username;
  const employee = await Employee.find({
    username: { $regex: username, $options: "i" },
  });
  res.json(employee);
});

export {
  authAdmin,
  adminUsername,
  addEmployee,
  updateEmployee,
  searchEmployee,
  removeEmployee,
  getEmployee,
};
