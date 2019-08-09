import React, { useState } from "react";
import TbMenu from "../../Components/TbMenu";
import JobCard from "../../Components/JobCard";
import TableFilters from "../../Components/TableFilters";
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
  Col,
  Progress,
  Tooltip,
  Card,
  Icon
} from "antd";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Jobs = () => {
  return (
    <div className="App">
      <div className={"main-content"}>
        <div className="centered">
          <Row gutter={24}>
            <Col xs={0} sm={0} md={0} lg={5}>
              <TbMenu />
            </Col>
            <Col xs={24} sm={24} md={24} lg={19}>
              <Title level={3} className="tb-margin-bottom-nil">
                Available jobs in your area
              </Title>
              <Text type="secondary" className="tb-margin-bottom-large">
                11280 results
              </Text>
              <TableFilters />
              <br />
              <Text strong className="tb-margin-bottom-medium">
                Sunday 28 July
              </Text>
              <Divider
                className={"tb-margin-bottom-medium"}
                style={{ marginTop: "0px" }}
              />
              <Row gutter={24}>
                <Col sxs={24} sm={12} md={16} lg={16}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
              </Row>
              <Text strong className="tb-margin-bottom-medium">
                Monday 29 July
              </Text>
              <Divider
                className={"tb-margin-bottom-medium"}
                style={{ marginTop: "0px" }}
              />
              <Row gutter={24}>
                <Col sxs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <JobCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
