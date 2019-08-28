import React from "react";
import { Select, Form, Input } from "antd";

const { Option } = Select;
function TbTagsAdd(props) {
  const { pads = "default" } = props;
  const children = [<Option key="1">Communicative</Option>];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Form layout="vertical" hideRequiredMark>
      <Form.Item label="Add more">
        {
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            size={pads}
            placeholder="Please select"
            defaultValue={["Click to add"]}
            onChange={handleChange}
          >
            {children}
          </Select>
        }
      </Form.Item>
    </Form>
  );
}

export default TbTagsAdd;
