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

const ages = [];
for (let i = 18; i <= 60; i++) {
  ages.push(i);
}

const weight = [];
for (let i = 50; i <= 300; i++) {
  weight.push(i);
}

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

const Register = ({ errors, touched }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h6" className={classes.header}>
          Register
        </Typography>

        <Form>
          <div>
            <Field
              className={classes.formInput}
              type="text"
              name="username"
              placeholder="Username"
            />
            {touched.username && errors.username && (
              <p className={classes.header}>{errors.username}</p>
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
    </>
  );
};

const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors }) {
    // use this if the backend api returns us with error of user already exists
    setErrors({ email: "Email is already taken" });
    resetForm();
    console.log(values);

    // make axios request to backend
    // reroute to login page
  }
})(Register);

export default FormikForm;
