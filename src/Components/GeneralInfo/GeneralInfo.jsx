import React from "react";
import { Descriptions, Typography } from "antd";
import "./GeneralInfo.scss";

const { Text } = Typography;
function GeneralInfo(props) {
  const { portalName = "Big Ben" } = props;

  return (
    <Descriptions>
      <Descriptions.Item label="First name">
        <Text editable>Jane</Text>
      </Descriptions.Item>
      <Descriptions.Item label="Last name">
        <Text editable>Doe</Text>
      </Descriptions.Item>
      <Descriptions.Item label="Email">
        <Text editable>Someone@email.com</Text>
      </Descriptions.Item>
      <Descriptions.Item label="Age">
        <Text editable>24</Text>
      </Descriptions.Item>
      <Descriptions.Item label="Living place">Amsterdam</Descriptions.Item>
      <Descriptions.Item label="Gender">Male</Descriptions.Item>
      <Descriptions.Item label="Phone No.">
        <Text editable>06123456789</Text>
      </Descriptions.Item>
      <Descriptions.Item label="Own car">Yes</Descriptions.Item>
      <Descriptions.Item label="Driving license">Yes</Descriptions.Item>
      <Descriptions.Item label="Postal code">1234 PQ</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  );
}

export default GeneralInfo;
