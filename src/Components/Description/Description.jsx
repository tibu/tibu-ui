import React from "react";
import "./Description.scss";
import {
  Row,
  Col,
  Card,
  Modal,
  Form,
  Input,
  Radio,
  Button,
  Icon,
  Typography,
  Divider,
  Tag
} from "antd";

function Description(props) {
  const { Title, Text } = Typography;
  const {
    location = [
      <Icon type="environment" />,
      " Diamantlaan 2, 2132 WV Hoofddorp"
    ],
    cardHeader = "De Tamarinde",
    children,
    cardHeaderTags = [
      <Tag color="red" style={{ marginLeft: "4px" }}>
        PZB WB
      </Tag>,
      <Tag color="cyan">PZP DB</Tag>,
      <Tag color="magenta">PZP QB</Tag>
    ],
    extraLink = (
      <a
        href="#"
        style={{
          float: "right",
          fontSize: "14px",
          fontWeight: "normal"
        }}
      >
        <Text
          style={{
            color: "#6d6eed"
          }}
        >
          View all
        </Text>
      </a>
    ),
    url
  } = props;

  return (
    <Card style={{ width: "100%" }} className={"tb-margin-bottom-large"}>
      <Title level={4}>
        {cardHeader} {cardHeaderTags} {extraLink}
      </Title>
      <Divider />
      {children}
    </Card>
  );
}

export default Description;
