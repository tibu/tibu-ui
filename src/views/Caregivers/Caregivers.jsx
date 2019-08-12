import React, { useState } from "react";
import TbMenu from "../../Components/TbMenu";
import JobCard from "../../Components/JobCard";
import TbLists from "../../Components/TbLists";
import "../../App.scss";
import {
  Tabs,
  Typography,
  Alert,
  Divider,
  Tag,
  List,
  Button,
  Row,
  Col
} from "antd";

const { Title, Text } = Typography;

const Caregivers = () => {
  return (
    <div className="App">
      <div className={"main-content"}>
        <div className="centered">
          <Row gutter={24}>
            <Col xs={0} sm={0} md={0} lg={5}>
              <TbMenu />
            </Col>
            <Col xs={24} sm={24} md={24} lg={19}>
              <TbLists />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Caregivers;
