import React from "react";
import Layout from "../components/Layout/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/StudentPage/Dashboard";
import Profile from "../pages/StudentPage/Profile";
import Progress from "../components/ProgressBar/Progress";
// import StudentPage from "../pages/StudentPage/AdminPage";

const Student = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/progress" component={Progress} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Student;