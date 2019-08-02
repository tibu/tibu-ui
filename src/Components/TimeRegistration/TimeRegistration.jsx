import React from "react";
import {
  Form,
  Input,
  Icon,
  DatePicker,
  Select,
  Row,
  Col,
  Button,
  Alert,
  TimePicker
} from "antd";
import moment from "moment";
import "./TimeRegistration.scss";

function TimeRegistration(props) {
  const { Option, OptGroup } = Select;
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  return (
    <Form>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Work item" className={"tb-margin-bottom-medium"}>
            <Select
              defaultValue="Select work item"
              style={{ width: "100%" }}
              size="large"
            >
              <OptGroup label="Hoofddord">
                <Option value="De linde">De linde</Option>
                <Option value="Tamarinde">Tamarinde</Option>
              </OptGroup>
              <OptGroup label="Amsterdam">
                <Option value="De linde AMS">De linde AMS</Option>
                <Option value="Tamarinde AMS">Tamarinde AMS</Option>
              </OptGroup>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Select date" className={"tb-margin-bottom-medium"}>
            <DatePicker
              size="large"
              style={{ width: "100%", position: "relative" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Start time" className={"tb-margin-bottom-medium"}>
            <TimePicker
              onChange={onChange}
              defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
              size="large"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="End time" className={"tb-margin-bottom-medium"}>
            <TimePicker
              onChange={onChange}
              defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
              size="large"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" size="large">
        Submit time
      </Button>
    </Form>
  );
}

export default TimeRegistration;
