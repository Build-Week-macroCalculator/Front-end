import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import {
  Typography,
  makeStyles,
  Button,
  TextField,
  Container,
  CssBaseline
} from "@material-ui/core";
import * as yup from "yup";
import { mergeClasses } from "@material-ui/styles";
import UserMetrics from "../register/UserMetrics";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  header: {
    margin: theme.spacing(1),
    textAlign: "center"
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

const Login = props => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: "", password: "" });
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h6" className={classes.header}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              autoFocus
              className={classes.formInput}
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              required
              minLength="2"
            />
          </div>
          <div>
            <input
              className={classes.formInput}
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
