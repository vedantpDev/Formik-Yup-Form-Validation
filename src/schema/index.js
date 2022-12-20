import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please Enter Name"),
  email: Yup.string().email().required("Please Enter Email"),
  password: Yup.string().min(6).required("Please Enter Password"),
});

// This use for confirm password
// con_password: Yup.string()
//   .required()
//   .oneOf([Yup.ref(password), null, "Password Must Match"]),
