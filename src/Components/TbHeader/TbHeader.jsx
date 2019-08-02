import React from "react";
import { Menu, Text, Layout, AutoComplete, Row, Col } from "antd";
import Logo from "../Logo";
import Complete from "../Complete";
import TbAvatar from "../TbAvatar";
import "./TbHeader.scss";

function TbHeader(props) {
  return (
    <Row gutter={24}>
      <Col span={5}>
        <Logo />
      </Col>
      <Col span={12}>
        <Complete />
      </Col>
      <Col span={7}>
        <TbAvatar />
      </Col>
    </Row>
  );
}

export default TbHeader;
