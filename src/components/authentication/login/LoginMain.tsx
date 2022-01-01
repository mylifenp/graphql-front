import { FC } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Navigate, useLocation } from "react-router-dom";
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useMounted } from "../../../hooks/use-mounted";
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../../../operations/mutations/authentication";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "../../../utils/config";
import { isLoggedInVar } from "../../../cache";

interface Props {}

export const LoginMain: FC<Props> = (props) => {
  const isMounted = useMounted();
  const location = useLocation();
  const [signIn, { loading, error }] = useMutation(SIGNIN_MUTATION);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      const { email, password } = values;
      signIn({
        variables: { email, password },
        onError: (err) => {
          Cookies.remove(AUTH_TOKEN);
          if (isMounted()) {
            helpers.setStatus({ success: false });
            helpers.setErrors({ submit: err.message });
            helpers.setSubmitting(false);
          }
        },
        onCompleted: ({ signIn }) => {
          const { token, expires } = signIn;
          const _expires = !expires
            ? new Date(new Date().getTime() + 60 * 60 * 1000)
            : new Date(new Date().getTime() + parseInt(expires, 10) * 1000);
          Cookies.set(AUTH_TOKEN, token, { expires: _expires });
          isLoggedInVar(true);
          const returnUrl = location.pathname || "/dashboard";
          return <Navigate to={returnUrl} />;
        },
      });
    },
  });

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        autoFocus
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        helperText={formik.touched.email && formik.errors.email}
        label="Email Address"
        margin="normal"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
      />
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        label="Password"
        margin="normal"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
      />
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>{formik.errors.submit}</FormHelperText>
        </Box>
      )}
      <Box sx={{ mt: 2 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Log In
        </Button>
      </Box>
    </form>
  );
};
