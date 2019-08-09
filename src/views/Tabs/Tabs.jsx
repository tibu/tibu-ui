import React, { useState } from "react";
import TbHeader from "../../Components/TbHeader";
import TbHeaderMobile from "../../Components/TbHeaderMobile";
import SideBarCard from "../../Components/SideBarCard";
import TbTabs from "../../Components/TbTabs";
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

  import "../../App.scss";

const Tabs = ()=>{
    return(
        <div className="App">
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
    )
}

export default Tabs