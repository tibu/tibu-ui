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
  Alert,
  TimePicker
} from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
const { Option } = Select;

function onChange(time, timeString) {
  console.log(time, timeString);
}
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
    const {
      buttonType = "secondary",
      ico = <Icon type="plus" />,
      buttonStyles = { display: "inline-block", marginLeft: "8px" },
      buttonLabel = "New job"
    } = this.props;
    return (
      <span>
        <Button
          type={buttonType}
          onClick={this.showDrawer}
          style={buttonStyles}
        >
          {ico} {buttonLabel}
        </Button>
        <div>
          <Drawer
            title="Create a new job"
            width={750}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Job title">
                    {getFieldDecorator("job", {
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
                    })(<Input placeholder="Please enter address" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Date">
                    {getFieldDecorator("name", {
                      rules: [
                        { required: true, message: "Please enter last name" }
                      ]
                    })(
                      <RangePicker
                        style={{ width: "100%" }}
                        getPopupContainer={trigger => trigger.parentNode}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Start time">
                        {getFieldDecorator("start time", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter job title"
                            }
                          ]
                        })(
                          <TimePicker
                            onChange={onChange}
                            style={{ width: "100%" }}
                            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="End time">
                        {getFieldDecorator("end time", {
                          rules: [
                            {
                              required: true,
                              message: "Please enter job title"
                            }
                          ]
                        })(
                          <TimePicker
                            onChange={onChange}
                            style={{ width: "100%" }}
                            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                          />
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Patients date of birth">
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
                <Col span={12}>
                  <Form.Item label="Care category">
                    {getFieldDecorator("care", {
                      rules: [
                        { required: true, message: "Please select a category" }
                      ]
                    })(
                      <Select placeholder="Please select an owner">
                        <Option value="Elderly care">Elderly care</Option>
                        <Option value="Infant care">Infant care</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Care category">
                    {getFieldDecorator("care", {
                      rules: [
                        { required: true, message: "Please select a category" }
                      ]
                    })(
                      <Select placeholder="Please select an owner">
                        <Option value="Elderly care">Elderly care</Option>
                        <Option value="Infant care">Infant care</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Organization">
                    {getFieldDecorator("care", {
                      rules: [
                        { required: true, message: "Please select a category" }
                      ]
                    })(
                      <Select placeholder="Please select an owner" disabled>
                        <Option value="Elderly care">Elderly care</Option>
                        <Option value="Infant care">Infant care</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Region">
                    {getFieldDecorator("care", {
                      rules: [
                        { required: true, message: "Please select a category" }
                      ]
                    })(
                      <Select placeholder="Please select an owner" disabled>
                        <Option value="Elderly care">Elderly care</Option>
                        <Option value="Infant care">Infant care</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Location">
                    {getFieldDecorator("care", {
                      rules: [
                        { required: true, message: "Please select a category" }
                      ]
                    })(
                      <Select placeholder="Please select an owner" disabled>
                        <Option value="Elderly care">Elderly care</Option>
                        <Option value="Infant care">Infant care</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Select affiliate">
                    {getFieldDecorator("affiliate", {
                      rules: [
                        { required: true, message: "Please select affiliate" }
                      ]
                    })(
                      <Select placeholder="Please select affiliate" disabled>
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
                      <Select placeholder="Please select a role" disabled>
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
const DrawerCreate = Form.create()(DrawerForm);

export default DrawerCreate;
