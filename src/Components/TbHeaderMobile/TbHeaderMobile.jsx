import React from "react";
import { Row, Col, Button, Icon } from "antd";
import Logo from "../LoginForm";
import Complete from "../Complete";
import TbAvatar from "../TbAvatar";
import "./TbHeaderMobile.scss";

function TbHeaderMobile(props) {
  return (
    <Row gutter={24}>
      <Col span={24} xs={24} sm={24} md={24} lg={0}>
        <Col span={8}>
          <Button className="tb-mobile-header-icons" type="link">
            <Icon type="clock-circle" style={{ fontSize: "18px" }} />
          </Button>
        </Col>
        <Col span={8}>
          <Button className="tb-mobile-header-icons" type="link">
            <Icon type="schedule" style={{ fontSize: "18px" }} />
          </Button>
        </Col>
        <Col span={8}>
          <Button className="tb-mobile-header-icons" type="link" icon>
            <Icon type="shop" style={{ fontSize: "18px" }} />
          </Button>
        </Col>
      </Col>
    </Row>
  );
}

export default TbHeaderMobile;
