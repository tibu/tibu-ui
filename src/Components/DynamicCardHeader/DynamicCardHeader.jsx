import React from "react";
import { Divider, Tag, Typography, Icon } from "antd";
import "./DynamicCardHeader.scss";

function DynamicCardHeader(props) {
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
    <div>
      <Title level={4} className={"tb-margin-bottom-nil"}>
        <span style={{ float: "left", marginRight: "4px" }}>{cardHeader}</span>
        {cardHeaderTags} {extraLink}
        <div className={"clear"} />
      </Title>
      <Divider
        className={"tb-margin-bottom-nil"}
        style={{ marginBottom: "0" }}
      />
    </div>
  );
}

export default DynamicCardHeader;
