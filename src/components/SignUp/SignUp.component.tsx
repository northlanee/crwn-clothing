import React, { FC, ReactElement } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "utils/formValidators";
import { InputField, Button } from "components";

import { auth, getUserProfileDocument } from "firebase/firebase.utils";

import "./SignUp.styles.scss";

type SignUpFormValues = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp: FC = (): ReactElement => {
  const [error, setError] = React.useState<string | null>(null);

  const initialValues: SignUpFormValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const submitHandler = async (data: SignUpFormValues) => {
    setError(null);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      if (user) {
        await getUserProfileDocument(user, data.displayName);
      } else setError("Error while fetchind user");
    } catch (err) {
      setError(err.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: submitHandler,
  });

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  const errorJSX = error && <div className="error">{error}</div>;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      {errorJSX}
      <form onSubmit={handleSubmit}>
        <InputField
          id="displayName"
          error={errors.displayName}
          touched={touched.displayName}
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.displayName}
        />
        <InputField
          id="signUpEmail"
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
          id="signUpPassword"
          error={errors.password}
          touched={touched.password}
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <InputField
          id="confirmPassword"
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
        />
        <div className="buttons">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
