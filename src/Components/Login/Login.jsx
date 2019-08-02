import React from "react";
import LoginAccount from "../LoginAccount";
import LoginForm from "../LoginForm";
import LoginCover from "./tibucoverlogin.png";
import { Button, Row, Col, Typography, Card, Avatar } from "antd";
import "./Login.scss";
import { root } from "postcss-selector-parser";

function Login(props) {
  const { portalName = "Big Ben" } = props;
  const { Text, Title } = Typography;

  return (
    <Row gutter={16} style={{ minHeight: "750px" }}>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        style={{
          height: "100%",
          position: "absolute",
          left: "0",
          padding: "40px"
        }}
      >
        <Row gutter={24}>
          <Col
            span={24}
            style={{ float: "right", color: "#FFF", maxWidth: "500px" }}
            className={"tb-margin-bottom-medium"}
          >
            <div className={"tb-cover-image"}>
              <img src={LoginCover} />
            </div>
            <Title level={2} className={"tb-margin-bottom-medium"}>
              What is Tibu you, ask?
            </Title>
            <Text type="secondary" className={"tb-margin-bottom-medium"}>
              Tibu is the platform that provides you and/or your organization
              with proffesional and student caregivers and a hassle free way to
              log time and track. And if you are a student or a proffesional
              caregiver looking for jobs, don't worry Tibu got you.
              <br />
            </Text>
            <Text type="secondary" className={"tb-margin-bottom-larger"}>
              - Tibu means cure in swahili, it might also mean treat or care.
            </Text>
          </Col>
        </Row>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        style={{
          backgroundColor: "#6d6eed",
          height: "100%",
          position: "absolute",
          right: "0",
          padding: "40px"
        }}
      >
        <Row gutter={24}>
          <Col
            span={24}
            style={{ float: "left", color: "#FFF", maxWidth: "500px" }}
          >
            <Title
              level={2}
              className={"tb-margin-bottom-medium"}
              style={{ color: "#FFF" }}
            >
              Login to continue
            </Title>
            <Text
              type="secondary"
              className={"tb-margin-bottom-larger"}
              style={{ color: "#FFF" }}
            >
              Please select account type and login.
            </Text>
            <LoginAccount className={"tb-margin-bottom-large"} />
            <Card style={{ marginTop: "8px" }}>
              <LoginForm />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Login;
