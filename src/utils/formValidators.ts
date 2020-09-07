import * as Yup from "yup";

const displayNameValidator = Yup.string()
  .min(4, "Too Short!")
  .max(16, "Too Long!")
  .required("Required");

const emailValidator = Yup.string().email("Invalid email").required("Required");

const passwordValidator = Yup.string()
  .min(6, "Too Short!")
  .max(20, "Too Long!")
  .required("Required");

const confirmPasswordValidator = Yup.string()
  .oneOf([Yup.ref("password")], "Passwords must match")
  .min(6, "Too Short!")
  .max(20, "Too Long!")
  .required("Required");

export const signInSchema = Yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
});

export const signUpSchema = Yup.object().shape({
  displayName: displayNameValidator,
  email: emailValidator,
  password: passwordValidator,
  confirmPassword: confirmPasswordValidator,
});
