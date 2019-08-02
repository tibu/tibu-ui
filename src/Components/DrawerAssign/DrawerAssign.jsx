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
  Icon,
  Alert
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
        <a onClick={this.showDrawer}>Assign</a>
        <div>
          <Drawer
            title={"Assign Caregiver"}
            width={550}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Alert
              className={"tb-margin-bottom-larger"}
              message="You are about to assign John Doe"
              description="Please select which organization and then assign, thank you."
              type="info"
              showIcon
            />
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Select organization">
                    {getFieldDecorator("organization", {
                      rules: [
                        {
                          required: true,
                          message: "Please select an organization"
                        }
                      ]
                    })(
                      <Select placeholder="Please select Organization">
                        <Option value="male">Stichting ons tweede thuis</Option>
                        <Option value="female">Stichting de halve boom</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Select Caregiver">
                    {getFieldDecorator("caregiver", {
                      rules: [
                        { required: true, message: "Please select an gender" }
                      ]
                    })(
                      <Select placeholder="John Doe">
                        <Option value="John Doe">John Doe</Option>
                        <Option value="Jane Doe">Jane Doe</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Assign role">
                    {getFieldDecorator("role", {
                      rules: [
                        {
                          required: true,
                          message: "Please select an organization"
                        }
                      ]
                    })(
                      <Select placeholder="Caregiver">
                        <Option value="Caregiver">Caregiver</Option>
                        <Option value="manger">Organization manager</Option>
                        <Option value="Manager">Location manager</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Select location">
                    {getFieldDecorator("location", {
                      rules: [
                        { required: true, message: "Please select an gender" }
                      ]
                    })(
                      <Select placeholder="Select location or region">
                        <Option value="John Doe">John Doe</Option>
                        <Option value="Jane Doe">Jane Doe</Option>
                        <Option value="other">Other</Option>
                      </Select>
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
                Assign
              </Button>
            </div>
          </Drawer>
        </div>
      </span>
    );
  }
}
const DrawerAssign = Form.create()(DrawerForm);

export default DrawerAssign;
