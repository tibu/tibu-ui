import React from "react";
import LogoSVG from "./logo-purple.svg";
import { Button, Row, Col } from "antd";
import "./logo.scss";

function Logo(props) {
  const { portalName = "Big Ben" } = props;

  return (
    <Row align="top">
      <Button type="link" className="logo">
        <Col lg={12}>
          <img src={LogoSVG} alt="Logo" />
        </Col>
        <Col xs={0} sm={0} md={0} lg={12}>
          <span>{portalName}</span>
        </Col>
      </Button>
    </Row>
  );
}

export default Logo;
