import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Button,
  Container,
  CssBaseline
} from "@material-ui/core";

const ages = [];
for (let i = 18; i <= 60; i++) {
  ages.push(i);
}

let weight = [];
for (let i = 50; i <= 100; i++) {
  weight.push(i);
}

const heights = [];
const heightKeys = [];
const heightValues = [];
let index = 0;
for (let i = 12; i <= 30; i++) {
  heightKeys.push(i);
  heightValues.push(convertInchesToFeet(i));
  let myobj = {};
  myobj[heightKeys[index]] = heightValues[index];
  heights.push(myobj);
  index++;
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

const UserMetrics = props => {
  const classes = useStyles();
  const [userMetrics, setUserMetrics] = useState({
    username: "",
    exercisefrequency: 0,
    gender: "male",
    age: 18,
    weight: 50,
    height: "12",
    goal: "10% deficit"
  });

  const handleChange = event => {
    setUserMetrics({ ...userMetrics, [event.target.name]: event.target.value });
    console.log(userMetrics);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userMetrics);
  };
  return (
    <div>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h6" className={classes.header}>
          Add User Metrics
        </Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              autoFocus
              type="text"
              className={classes.formInput}
              name="username"
              placeholder="name"
              onChange={handleChange}
              value={userMetrics.username}
            />
          </div>

          <div>
            <Typography className={classes.header}>Gender</Typography>
            <select
              onChange={handleChange}
              className={classes.formInput}
              name="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <Typography className={classes.header}>Age</Typography>
            <select
              className={classes.formInput}
              name="age"
              onChange={handleChange}
            >
              {ages.map((age, index) => (
                <option key={index} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Typography className={classes.header}>Weight</Typography>
            <select
              className={classes.formInput}
              name="weight"
              onChange={handleChange}
            >
              {weight.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Typography className={classes.header}>Height</Typography>
            <select
              className={classes.formInput}
              name="height"
              onChange={handleChange}
            >
              {heights.map((height, index) => (
                <option key={index} value={Object.keys(height)[0]}>
                  {Object.values(height)[0]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Typography className={classes.header}>
              Days spent exercising
            </Typography>
            <select
              className={classes.formInput}
              onChange={handleChange}
              name="exercisefrequency"
            >
              {["0", "1-2", "3-4", "5-6", "7"].map(days => (
                <option key={days} value={days}>
                  {days}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Typography className={classes.header}>Goal</Typography>
            <select
              className={classes.formInput}
              onChange={handleChange}
              name="goal"
            >
              <option value="20% deficit">Aggressive weight loss</option>
              <option value="15% deficit">Moderate weight loss</option>
              <option value="10% deficit">Weight loss</option>
              <option value="0% deficit">Maintain weight</option>
              <option value="10% surplus">Moderate weight gain</option>
              <option value="15% surplus">Aggressive weight gain</option>
            </select>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add User Metrics
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default UserMetrics;

function convertInchesToFeet(inches) {
  let feet = inches / 12;
  if (Number.isInteger(feet)) {
    return `${Math.round(feet)}' 0"'`;
  } else {
    let wholeNumber = feet - (inches % 12) / 12;
    let newWholeNumber = wholeNumber * 12;
    let remainder = inches - newWholeNumber;
    return `${Math.round(wholeNumber)}' ${Math.round(remainder)}"`;
  }
}
