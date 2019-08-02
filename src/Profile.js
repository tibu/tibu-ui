import React, { Component } from "./node_modules/react";
import {
  Button,
  Row,
  Menu,
  Breadcrumb,
  Col,
  Layout
} from "./node_modules/antd";
import TbHeader from "./Components/TbHeader";
import SideBarCard from "./Components/SideBarCard";
import TbTabs from "./Components/TbTabs";
import "../App.scss";

const { Header, Footer, Sider, Content } = Layout;
class Profile extends Component {
  render() {
    return (
      <div>
        <div className={"main-body-header tb-margin-bottom-large"}>
          <div className={"centered"}>
            <TbHeader />
          </div>
        </div>

        <div className={"main-content"}>
          <div className="centered">
            <Row gutter={24}>
              <Col span={5}>
                <SideBarCard />
              </Col>
              <Col span={12} />
              <Col span={7}>This IS PsYcho</Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default import("inspector").Profile;
