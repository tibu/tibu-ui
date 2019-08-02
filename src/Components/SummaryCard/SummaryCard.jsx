import React from "react";
import LogoSVG from "./logo-purple.svg";
import { Button, Row, Col, Card } from "antd";
import "./SummaryCard.scss";
import Description from "../JobsList";

function Logo(props) {
  const { portalName = "Big Ben" } = props;

  return (
    <Description>
      <Row align="top">
        <Button type="link" className="logo">
          <Col lg={12}>Test</Col>
          <Col xs={0} sm={0} md={0} lg={12}>
            Test 2
          </Col>
        </Button>
      </Row>
    </Description>
  );
}

export default Logo;
