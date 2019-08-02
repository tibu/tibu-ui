import React from "react";
import SideBarCard from "../SideBarCard";
import ListCard from "../ListCard";
import TbFilters from "../TbFilters";
import { Button, Row, Col, Typography, Divider } from "antd";
import "./TbLists.scss";

function TbLists(props) {
  const { Title, Text } = Typography;

  return (
    <div>
      <Title level={3} className="tb-margin-bottom-nil">
        Listed organizations
      </Title>
      <Text type="secondary" className="tb-margin-bottom-larger">
        3 results in Hoofddorp
      </Text>
      <TbFilters className={"tb-margin-bottom-medium"} />
      <Text strong className="tb-margin-bottom-medium">
        Hoofddorp
      </Text>
      <Divider
        className={"tb-margin-bottom-medium"}
        style={{ marginTop: "0px" }}
      />
      <Row gutter={24}>
        <Col xs={24} sm={12} md={8} lg={8} className={"tb-margin-bottom-large"}>
          <SideBarCard orgName={"De Linde"} iconType={"medicine-box"} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className={"tb-margin-bottom-large"}>
          <SideBarCard orgName={"De Potuur"} iconType={"medicine-box"} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className={"tb-margin-bottom-large"}>
          <SideBarCard iconType={"medicine-box"} />
        </Col>
      </Row>
      <Text strong className="tb-margin-bottom-medium">
        Amsterdam
      </Text>
      <Divider
        className={"tb-margin-bottom-medium"}
        style={{ marginTop: "0px" }}
      />
      <Row gutter={24}>
        <Col xs={24} sm={12} md={8} lg={8} className={"tb-margin-bottom-large"}>
          <ListCard orgName={"De Linde"} iconType={"medicine-box"} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className={"tb-margin-bottom-large"}>
          <ListCard orgName={"De Potuur"} iconType={"medicine-box"} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className={"tb-margin-bottom-large"}>
          <ListCard iconType={"medicine-box"} />
        </Col>
      </Row>
    </div>
  );
}

export default TbLists;
