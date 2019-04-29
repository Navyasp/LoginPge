import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home/index";
import DashBoardPage from "./component/home/DashBoardPage";
import "./styles.css";
const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact component={DashBoardPage} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
