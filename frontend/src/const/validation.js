import * as yup from "yup";

export const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  email: yup.string().email().required("email is required"),
  mobile: yup
    .string()
    .required("Mobile number is reqiured")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  designation: yup.string().required("Designation is required"),
  gender: yup.string().required("Gender is required"),
  course: yup.string().required("Course is required"),
});
