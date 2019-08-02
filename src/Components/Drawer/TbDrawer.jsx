import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Icon
} from "antd";

const { Option } = Select;

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <span>
        <Button
          type="secondary"
          onClick={this.showDrawer}
          style={{ display: "inline-block", marginLeft: "8px" }}
        >
          <Icon type="plus" /> New account
        </Button>
        <div>
          <Drawer
            title="Create a new account"
            width={750}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="First name">
                    {getFieldDecorator("name", {
                      rules: [
                        { required: true, message: "Please enter first name" }
                      ]
                    })(<Input placeholder="Please enter user name" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Last name">
                    {getFieldDecorator("name", {
                      rules: [
                        { required: true, message: "Please enter last name" }
                      ]
                    })(<Input placeholder="Please enter user name" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Email">
                    {getFieldDecorator("email", {
                      rules: [{ required: true, message: "Please enter email" }]
                    })(<Input placeholder="not correct email formart" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Date of birth">
                    {getFieldDecorator("dateTime", {
                      rules: [
                        {
                          required: true,
                          message: "Please enter date of birth"
                        }
                      ]
                    })(
                      <DatePicker
                        style={{ width: "100%" }}
                        getPopupContainer={trigger => trigger.parentNode}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Password">
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Password must contain numbers"
                        }
                      ]
                    })(<Input.Password placeholder="Please enter password" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Confirm password">
                    {getFieldDecorator("passwordConfirm", {
                      rules: [
                        {
                          required: true,
                          message: "Password must contain numbers"
                        }
                      ]
                    })(
                      <Input.Password placeholder="please confirm password" />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Select gender">
                    {getFieldDecorator("gender", {
                      rules: [
                        { required: true, message: "Please select an gender" }
                      ]
                    })(
                      <Select placeholder="Please select an owner">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Address">
                    {getFieldDecorator("address", {
                      rules: [
                        { required: true, message: "Please enter address" }
                      ]
                    })(<Input placeholder="Please enter address" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Postal code">
                    {getFieldDecorator("zip code", {
                      rules: [
                        { required: true, message: "Please enter postal code" }
                      ]
                    })(<Input placeholder="Please enter postal code" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Phone number">
                    {getFieldDecorator("phone", {
                      rules: [
                        { required: true, message: "Please enter phone number" }
                      ]
                    })(<Input placeholder="Please enter phone number" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Select affiliate">
                    {getFieldDecorator("affiliate", {
                      rules: [
                        { required: true, message: "Please select affiliate" }
                      ]
                    })(
                      <Select placeholder="Please select affiliate">
                        <Option value="de linde">De Linde</Option>
                        <Option value="De potuur">De Potuur</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Role">
                    {getFieldDecorator("role", {
                      rules: [
                        { required: true, message: "Please select an role" }
                      ]
                    })(
                      <Select placeholder="Please select a role">
                        <Option value="Caregiver">Caregiver</Option>
                        <Option value="Manager">Manager</Option>
                        <Option value="Parent">Parent</Option>
                        <Option value="Parent">Organization</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item label="Description">
                    {getFieldDecorator("description", {
                      rules: [
                        {
                          required: true,
                          message: "please enter url description"
                        }
                      ]
                    })(
                      <Input.TextArea
                        rows={4}
                        placeholder="please enter url description"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e9e9e9",
                padding: "10px 16px",
                background: "#fff",
                textAlign: "right"
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          </Drawer>
        </div>
      </span>
    );
  }
}
const TbDrawer = Form.create()(DrawerForm);

export default TbDrawer;
