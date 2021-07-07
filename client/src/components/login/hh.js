const Login = ({ errors, touched, isSubmitting }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h6" className={classes.header}>
          Login
        </Typography>

        <Form>
          <div>
            <Field
              autoFocus
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
          {/* <button disabled={isSubmitting} type="submit">
          Log In
        </button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
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
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setErrors({ email: "Email is already taken" });
    resetForm();
    setSubmitting(false);
    console.log(values);
    // make axios request to backend
    // route to dashboard on success
  }
})(Login);
