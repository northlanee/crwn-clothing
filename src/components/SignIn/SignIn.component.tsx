import React, { FC, ReactElement } from "react";
import { useFormik } from "formik";
import { signInSchema } from "utils/formValidators";
import { InputField, Button } from "components";

import { signInWithGoogle, auth } from "firebase/firebase.utils";
import { getUserProfileDocument } from "api";

import "./SignIn.styles.scss";

type SignInFormValues = {
  email: string;
  password: string;
};

const SignIn: FC = (): ReactElement => {
  const [error, setError] = React.useState<string | null>(null);

  const initialValues: SignInFormValues = { email: "", password: "" };
  const submitHandler = async (data: SignInFormValues) => {
    setError(null);
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      if (user) {
        await getUserProfileDocument(user);
      } else setError("Error while fetchind user");
    } catch (err) {
      setError(err.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,
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
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password.</span>
      {errorJSX}

      <form onSubmit={handleSubmit}>
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
        <div className="buttons">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={signInWithGoogle} googleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
