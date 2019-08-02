import React from "react";
import "./TbAvatar.scss";
import { Avatar, Button, Dropdown, Icon, Menu, Row, Col } from "antd";

function TbAvatar(props) {
  const {
    firstName = "Isaack",
    middleName = "O.",
    lastName = "Brian",
    url
  } = props;
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">View profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">Time</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Sign out</Menu.Item>
    </Menu>
  );
  return (
    <Row className={"tb_l_avatar_block"}>
      <Col xs={12} sm={12} md={12} lg={4} push={0}>
        <Button type="link" to="/profile" style={{ padding: "0" }}>
          <Avatar
            className="tb_l_avatar"
            style={{ backgroundColor: "#6D6EED" }}
            icon="user"
          />
        </Button>
      </Col>
      <Col xs={0} sm={0} md={0} lg={16} push={0}>
        {" "}
        <Button
          type="link"
          to="/profile"
          style={{ padding: "0", textAlign: "right" }}
        >
          <div className="tb_l_avatar_block__text">
            <span>{firstName + " " + middleName + " " + lastName}</span>
          </div>
        </Button>
      </Col>
      <Col xs={1} sm={1} md={1} lg={4} style={{ textAlign: "right" }} push={0}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" href="#">
            <Icon type="menu" style={{ position: "relative", top: "6px" }} />
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default TbAvatar;
