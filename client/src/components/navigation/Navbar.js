import React from "react";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navLink: {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold"
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.navLink} to="/">
              Macro-Calculator
            </NavLink>
          </Typography>
          <Button>
            <NavLink className={classes.navLink} to="/dashboard">
              Dashboard
            </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.navLink} to="/register">
              Register
            </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.navLink} to="/login">
              Login
            </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.navLink} to="/snacks">
              Snack / Meals
            </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.navLink} to="/logout">
              Log out
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
