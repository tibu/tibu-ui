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
  TimePicker
} from "antd";
import "./TableFilters.scss";

function TableFilters(props) {
  const { RangePicker } = DatePicker;
  const { Option, OptGroup } = Select;
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <Form layout="inline">
      <Form.Item label="Filter dates">
        <RangePicker onChange={onChange} />
      </Form.Item>
      <Form.Item>
        <Select defaultValue="Organization" style={{ width: "100%" }}>
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Filter
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TableFilters;
