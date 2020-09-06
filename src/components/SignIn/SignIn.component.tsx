import React, { FC, ReactElement } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputField, Button } from "../index";

import "./SignIn.styles.scss";

type SignInFormValues = {
  email: string;
  password: string;
};

const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const SignIn: FC = (): ReactElement => {
  const initialValues: SignInFormValues = { email: "", password: "" };
  const handleSubmit = () => {
    alert(111);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,
    onSubmit: handleSubmit,
  });

  const { errors, touched, values, handleChange, handleBlur } = formik;

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={formik.handleSubmit}>
        <InputField
          id="email"
          error={errors.email}
          touched={touched.email}
          label="E-Mail"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <InputField
          id="password"
          error={errors.password}
          touched={touched.password}
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignIn;
