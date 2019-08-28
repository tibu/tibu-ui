import React from "react";
import { Button, Row, Col, Form, Input, DatePicker } from "antd";
import "./logo.scss";
const { TextArea } = Input;
function EditBioInline(props) {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <Form className="login-form">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Job Title">
            {<Input placeholder="Please enter job title" />}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Company">
            {<Input placeholder="Please enter company" />}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Start date">
            {<DatePicker style={{ width: "100%" }} onChange={onChange} />}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="End date">
            {<DatePicker style={{ width: "100%" }} onChange={onChange} />}
          </Form.Item>
        </Col>
        <Col span={24} style={{ marginBottom: "16px" }}>
          <Form.Item label="Job description">
            {<TextArea placeholder="Enter description here" autosize />}
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ display: "inline-block" }}
            >
              Add experience
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default EditBioInline;
