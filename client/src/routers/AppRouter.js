import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import UserMetrics from "../components/register/UserMetrics";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/usermetrics" component={UserMetrics} />
      </div>
    </Router>
  );
};

export default AppRouter;
