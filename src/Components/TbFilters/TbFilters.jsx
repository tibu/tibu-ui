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
import "./TbFilters.scss";

function TbFilters(props) {
  const { Option, OptGroup } = Select;
  const { selectPlaceholder = "Regions", topLevel = "Hoofddorp" } = props;
  const formItemLayout = {
    labelCol: {
      xs: { span: 4 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 2 }
    },
    wrapperCol: {
      xs: { span: 10 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 12 }
    }
  };
  return (
    <Form {...formItemLayout}>
      <Form.Item label="Filter dates">
        <Row gutter={8}>
          <Col span={12}>
            <Select defaultValue={selectPlaceholder} style={{ width: "100%" }}>
              <OptGroup label={topLevel}>
                <Option value="De linde">Tolenburg</Option>
                <Option value="Tamarinde">Overboos</Option>
              </OptGroup>
              <OptGroup label="Amsterdam">
                <Option value="De linde AMS">De linde AMS</Option>
                <Option value="Tamarinde AMS">Tamarinde AMS</Option>
              </OptGroup>
            </Select>
          </Col>
          <Col span={6}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                display: "block",
                width: "100%",
                position: "relative",
                marginTop: "2px"
              }}
            >
              Filter
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
}

export default TbFilters;
