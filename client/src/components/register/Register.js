import React from "react";
import { withFormik, Form, Field } from "formik";
import {
  Typography,
  makeStyles,
  Button,
  Container,
  CssBaseline
} from "@material-ui/core";
import * as yup from "yup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  header: {
    margin: theme.spacing(1),
    textAlign: "center"
  },
  control: {
    padding: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1),
    width: "100%"
  },
  input: {
    display: "none"
  },
  formInput: {
    margin: theme.spacing(1),
    width: "100%",
    height: 40,
    borderRadius: 5,
    padding: theme.spacing(1)
  },
  container: {
    marginTop: theme.spacing(5)
  }
}));

const Register = ({ errors, touched, isSubmitting }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h6" className={classes.header}>
          Register
        </Typography>

        <Form>
          <div>
            <Field
              autoFocus={true}
              className={classes.formInput}
              type="name"
              name="name"
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <p className={classes.header}>{errors.name}</p>
            )}
          </div>

          <div>
            <Field
              className={classes.formInput}
              type="email"
              name="email"
              placeholder="Email"
            />
            {touched.email && errors.email && (
              <p className={classes.header}>{errors.email}</p>
            )}
          </div>
          <div>
            <Field
              className={classes.formInput}
              type="password"
              name="password"
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <p className={classes.header}>{errors.password}</p>
            )}
          </div>
          {/* <button disabled={isSubmitting} type="submit">
        Log In
      </button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Register
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setErrors({ email: "Email is already taken" });
    resetForm();
    setSubmitting(false);
    console.log(values);
    // make axios request to backend
  }
})(Register);

export default FormikForm;
