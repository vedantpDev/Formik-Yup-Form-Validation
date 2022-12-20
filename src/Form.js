import React, { useState } from "react";
import { useFormik } from "formik";
// Formik : it Handle the Form. it will get data of the 'Form'.

import { signUpSchema } from "./schema";

const Form = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {
    values,
    errors,
    touched,
    onBlur,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    // initialValues we get into (value)
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (value, action) => {
      console.log(value);

      // For reset Form
      action.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
        <div className="mb-3">
          <label className="form-label">Enter Name</label>
          <input
            type="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="exampleInputName"
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="exampleInputEmail1"
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {errors.password && touched.password ? (
          <p className="form-error">{errors.password}</p>
        ) : null}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
