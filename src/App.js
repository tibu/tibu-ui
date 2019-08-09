import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Divider, Typography } from "antd";
import ViewsHome from "./views/Home";
import ViewsTimelog from "./views/Timelog";
import ViewsProfile from "./views/Profile";
import ViewsJobs from "./views/Jobs";
import ViewsJobsPage from "./views/JobsPage";
import ViewsTabs from "./views/Tabs";
import TbHeader from "./Components/TbHeader";
import TbHeaderMobile from "./Components/TbHeaderMobile";
import "./App.scss";

const { Title } = Typography;
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
            className={"tb-margin-bottom-large"}
            style={{ marginTop: "0px" }}
          />

          <Switch>
            <Route path="/" exact component={ViewsHome} />
            <Route path="/timelogs" exact component={ViewsTimelog} />
            <Route path="/profile" exact component={ViewsProfile} />
            <Route path="/jobs" exact component={ViewsJobs} />
            <Route path="/jobs/:id" exact component={ViewsJobsPage} />
            <Route path="/tabs" exact component={ViewsTabs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
