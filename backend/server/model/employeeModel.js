import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  image:[{
    type:String,
    
   
   
}],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
