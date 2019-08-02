import React, { Component } from "react";
import logo from "./logo.svg";
import {
  Button,
  Row,
  Menu,
  Breadcrumb,
  Col,
  Layout,
  Card,
  Divider
} from "antd";
import TbHeader from "./Components/TbHeader";
import TbHeaderMobile from "./Components/TbHeaderMobile";
import SideBarCard from "./Components/SideBarCard";
import TbTabs from "./Components/TbTabs";
import Login from "./Components/Login";
import "./App.scss";

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
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
        <div className={"main-content"}>
          <div className="centered">
            <Row gutter={24}>
              <Col xs={0} sm={0} md={0} lg={5}>
                <SideBarCard />
              </Col>
              <Col xs={24} sm={24} md={24} lg={19}>
                <TbTabs />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
