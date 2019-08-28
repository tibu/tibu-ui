import React from "react";
import { Timeline, Icon, Typography } from "antd";
import EditBioInline from "../EditBioInline";
import "./TbTimeline.scss";

const { Text, Title } = Typography;
function TbTimeline(props) {
  const { portalName = "Big Ben" } = props;

  return (
    <Timeline>
      <Timeline.Item
        dot={
          <Icon
            type="edit"
            theme="twoTone"
            twoToneColor="#6d6eed"
            style={{ fontSize: "16px" }}
          />
        }
      >
        <Text strong>New Experience</Text>
        <EditBioInline />
      </Timeline.Item>
      <Timeline.Item
        dot={
          <Icon
            type="star"
            theme="twoTone"
            twoToneColor="#6d6eed"
            style={{ fontSize: "16px" }}
          />
        }
      >
        <Text strong>Cabin crew world manager</Text>
        <br />
        <Text style={{ color: "#6d6eed" }} twoToneColor="#6d6eed">
          British airways
        </Text>{" "}
        <br />
        <Text className={"tb-margin-bottom-medium"} type="secondary">
          March 1990 - Present
        </Text>
        <p className={"tb-margin-bottom-medium"}>
          The world of healthcare is on the move. This requires a creative
          approach from all parties involved. In many cases, care can be
          organized differently, and clients, care providers and financiers can
          benefit from this. That is why Stichting De Linde focuses on
          innovation. We do this mainly in collaboration with our sister
          organizations De Tamarinde and De Portuur . Below we present three
          initiatives that we have launched in the recent period. These are
          three new platforms that stem from our principle of scaling up and
          down scaling. De Linde always provides a professional framework and a
          sounding board for these platforms, so that the quality of the service
          is guaranteed.
        </p>
      </Timeline.Item>
      <Timeline.Item
        dot={<Icon type="star" theme="twoTone" twoToneColor="#6d6eed" />}
        color="green"
      >
        <Text strong>Cabin crew world manager</Text>
        <br />
        <Text style={{ color: "#6d6eed" }} twoToneColor="#6d6eed">
          British airways
        </Text>{" "}
        <br />
        <Text className={"tb-margin-bottom-medium"} type="secondary">
          March 1990 - Present
        </Text>
        <p className={"tb-margin-bottom-medium"}>
          The world of healthcare is on the move. This requires a creative
          approach from all parties involved. In many cases, care can be
          organized differently, and clients, care providers and financiers can
          benefit from this. That is why Stichting De Linde focuses on
          innovation. We do this mainly in collaboration with our sister
          organizations De Tamarinde and De Portuur . Below we present three
          initiatives that we have launched in the recent period. These are
          three new platforms that stem from our principle of scaling up and
          down scaling. De Linde always provides a professional framework and a
          sounding board for these platforms, so that the quality of the service
          is guaranteed.
        </p>
      </Timeline.Item>
      <Timeline.Item
        dot={<Icon type="star" theme="twoTone" twoToneColor="#6d6eed" />}
        color="red"
      >
        <Text strong>Cabin crew world manager</Text>
        <br />
        <Text style={{ color: "#6d6eed" }} twoToneColor="#6d6eed">
          British airways
        </Text>{" "}
        <br />
        <Text className={"tb-margin-bottom-medium"} type="secondary">
          March 1990 - Present
        </Text>
        <p className={"tb-margin-bottom-medium"}>
          The world of healthcare is on the move. This requires a creative
          approach from all parties involved. In many cases, care can be
          organized differently, and clients, care providers and financiers can
          benefit from this. That is why Stichting De Linde focuses on
          innovation. We do this mainly in collaboration with our sister
          organizations De Tamarinde and De Portuur . Below we present three
          initiatives that we have launched in the recent period. These are
          three new platforms that stem from our principle of scaling up and
          down scaling. De Linde always provides a professional framework and a
          sounding board for these platforms, so that the quality of the service
          is guaranteed.
        </p>
      </Timeline.Item>
      <Timeline.Item
        dot={<Icon type="star" theme="twoTone" twoToneColor="#6d6eed" />}
      >
        <Text strong>Cabin crew world manager</Text>
        <br />
        <Text style={{ color: "#6d6eed" }} twoToneColor="#6d6eed">
          British airways
        </Text>{" "}
        <br />
        <Text className={"tb-margin-bottom-medium"} type="secondary">
          March 1990 - Present
        </Text>
        <p className={"tb-margin-bottom-medium"}>
          The world of healthcare is on the move. This requires a creative
          approach from all parties involved. In many cases, care can be
          organized differently, and clients, care providers and financiers can
          benefit from this. That is why Stichting De Linde focuses on
          innovation. We do this mainly in collaboration with our sister
          organizations De Tamarinde and De Portuur . Below we present three
          initiatives that we have launched in the recent period. These are
          three new platforms that stem from our principle of scaling up and
          down scaling. De Linde always provides a professional framework and a
          sounding board for these platforms, so that the quality of the service
          is guaranteed.
        </p>
      </Timeline.Item>
    </Timeline>
  );
}

export default TbTimeline;
