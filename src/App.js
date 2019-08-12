import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  hashHistory
} from "react-router-dom";
import { Breadcrumb, Divider, Typography, Icon } from "antd";
import ViewsHome from "./views/Home";
import ViewsTimelog from "./views/Timelog";
import ViewsProfile from "./views/Profile";
import ViewsJobs from "./views/Jobs";
import ViewsManagers from "./views/Managers";
import ViewsJobsPage from "./views/JobsPage";
import ViewsCaregivers from "./views/Caregivers";
import ViewsOrganizationPage from "./views/OrganizationPage";
import ViewsTabs from "./views/Tabs";
import TbHeader from "./Components/TbHeader";
import TbHeaderMobile from "./Components/TbHeaderMobile";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className={"main-body-header"}>
            <div className={"centered"}>
              <TbHeader />
            </div>
          </div>
          <Divider style={{ marginTop: "0px", marginBottom: "0px" }} />
          <div className={"centered"}>
            <TbHeaderMobile />
          </div>
          <Divider
            className={"tb-margin-bottom-medium"}
            style={{ marginTop: "0px" }}
          />
          <div className={"centered"}>
            <Breadcrumb className={"tb-margin-bottom-large"}>
              <Breadcrumb.Item href="">
                <Link to="/">
                  <Icon type="home" />
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="usergroup-add" />
                <span>
                  <Link to="/managers">Managers Portal</Link>
                </span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Switch>
            <Route path="/" exact component={ViewsHome} />
            <Route path="/timelogs" exact component={ViewsTimelog} />
            <Route path="/profile" exact component={ViewsProfile} />
            <Route path="/jobs" exact component={ViewsJobs} />
            <Route path="/caregivers" exact component={ViewsCaregivers} />
            <Route path="/managers" exact component={ViewsManagers} />
            <Route path="/jobs/:id" exact component={ViewsJobsPage} />
            <Route
              path="/organizations"
              exact
              component={ViewsOrganizationPage}
            />
            <Route path="/tabs" exact component={ViewsTabs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
