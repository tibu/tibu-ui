import React from "react";
import { Link } from "react-router-dom";
import { Card, Avatar, Typography, Button, Divider, List, Icon } from "antd";
import "./SideBarCard.scss";

function SideBarCard(props) {
  const { Text } = Typography;
  const {
    orgName = " De Tamarinde",
    email = " someone@gmail.com",
    cardEntity = "Organization",
    languages = [" English,", " Dutch,", " Spanish"],
    location = " Amsterdam",
    cardCta = "View profile",
    iconType = "user",
    url
  } = props;
  const data = [
    <div>
      <Icon type="environment" className={"side-bar-ico"} />
      {location}
    </div>,
    <div>
      <Icon type="global" className={"side-bar-ico"} />
      {languages}
    </div>,
    <div>
      <Icon type="mail" className={"side-bar-ico"} />
      {email}
    </div>,
    <Button
      type="primary"
      href={"/Profile.js"}
      style={{ width: "100%", marginTop: "16px" }}
    >
      {cardCta}
    </Button>
  ];
  return (
    <Card style={{ width: "auto" }}>
      <Avatar
        size={150}
        style={{
          backgroundColor: "#6d6eed",
          margin: "0 auto 24px",
          display: "block"
        }}
        icon={iconType}
      />
      <div className={"tb-user-titles"}>
        <Button
          type="link"
          style={{
            display: "block",
            textAlign: "center",
            width: "100%"
          }}
        >
          <Text strong>{orgName}</Text>
        </Button>
        <Text disabled>{cardEntity}</Text>
      </div>
      <Divider />
      <List
        size="small"
        dataSource={data}
        renderItem={item => (
          <List.Item
            style={{
              border: "none",
              padding: "0 0 8px",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </Card>
  );
}
export default SideBarCard;
