import React from "react";
import { Button, Row, Col, Radio, Typography, Avatar, Card } from "antd";
import adminImage from "./admin.png";
import careImage from "./caregiver.png";
import managerImage from "./mangers.png";
import "./LoginAccount.scss";
const { Text } = Typography;
class LoginAccount extends React.Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <Radio.Group
        onChange={this.onChange}
        value={this.state.value}
        style={{ width: "100%" }}
        defaultValue={1}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card className={"tb-admins-card"}>
              <Radio value={1}>
                <br />
                <Avatar className={"tb-login-avatar"} src={careImage} />
                <br />
                <Text strong>Caregiver</Text>
              </Radio>
            </Card>
          </Col>
          <Col span={8}>
            <Card className={"tb-admins-card"}>
              <Radio value={2}>
                <br />
                <Avatar className={"tb-login-avatar"} src={adminImage} />
                <br />
                <Text strong>Admin</Text>
              </Radio>
            </Card>
          </Col>
          <Col span={8}>
            <Card className={"tb-admins-card"} hoverable>
              <Radio value={3}>
                <br />
                <Avatar className={"tb-login-avatar"} src={managerImage} />
                <br />
                <Text strong>Manager</Text>
              </Radio>
            </Card>
          </Col>
        </Row>
      </Radio.Group>
    );
  }
}

export default LoginAccount;
