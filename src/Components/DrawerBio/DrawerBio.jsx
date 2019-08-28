import React from "react";
import TbTagsAdd from "../TbTagsAdd";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Icon,
  Alert
} from "antd";

const { Option } = Select;
const { TextArea } = Input;

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
          type="primary"
          style={{ width: "100%", display: "block" }}
          onClick={this.showDrawer}
        >
          Edit profile
        </Button>
        <div>
          <Drawer
            title={"Assign Caregiver"}
            width={550}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Alert
              className={"tb-margin-bottom-larger"}
              message="Please fill the required fields"
              description="Sorry this is just an error."
              type="error"
              showIcon
            />
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={24}>
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
                  <Form.Item label="Email">
                    {getFieldDecorator("email", {
                      rules: [
                        { required: true, message: "Please enter job title" }
                      ]
                    })(<Input placeholder="Please enter job title" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Phone number">
                    {getFieldDecorator("mobile", {
                      rules: [
                        { required: true, message: "Please enter job title" }
                      ]
                    })(<Input placeholder="Please enter job title" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Own a car">
                    {getFieldDecorator("drive", {
                      rules: [
                        {
                          required: true,
                          message: "Please select an organization"
                        }
                      ]
                    })(
                      <Select placeholder="--Select--">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Drivers license">
                    {getFieldDecorator("license", {
                      rules: [
                        { required: true, message: "Please enter job title" }
                      ]
                    })(<Input placeholder="Please enter job title" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Postal code">
                    {getFieldDecorator("zip", {
                      rules: [
                        { required: true, message: "Please enter job title" }
                      ]
                    })(<Input placeholder="Please enter job title" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Address">
                    {getFieldDecorator("address", {
                      rules: [
                        { required: true, message: "Please enter job title" }
                      ]
                    })(<Input placeholder="Please enter job title" />)}
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Bio">
                    {getFieldDecorator("organization", {
                      rules: [
                        {
                          required: true,
                          message: "Please select an organization"
                        }
                      ]
                    })(
                      <TextArea
                        placeholder="The world of healthcare is on the move. This requires a creative approach from all parties involved. In many cases, care can be organized differently, and clients, care providers and financiers can benefit from this. That is why Stichting De Linde focuses on innovation. We do this mainly in collaboration with our sister organizations De Tamarinde and De Portuur . Below we present three initiatives that we have launched in the recent period. These are three new platforms that stem from our principle of scaling up and down scaling. De Linde always provides a professional framework and a sounding board for these platforms, so that the quality of the service is guaranteed"
                        autosize
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Character">
                    {getFieldDecorator("character", {
                      rules: [
                        {
                          required: true,
                          message: "Please select an organization"
                        }
                      ]
                    })(<TbTagsAdd />)}
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
const DrawerBio = Form.create()(DrawerForm);

export default DrawerBio;
