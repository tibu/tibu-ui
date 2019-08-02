import React from "react";
import DefaultCover from "./tibusquare.png";
import "./JobCard.scss";
import {
  Row,
  Col,
  Card,
  Upload,
  message,
  Button,
  Icon,
  Typography
} from "antd";

function JobCard(props) {
  const { Title, Text } = Typography;
  const {
    location = [
      <Icon type="environment" />,
      " Diamantlaan 2, 2132 WV Hoofddorp"
    ],
    jobTime = "16:30" + " - " + "18:30",
    orgName = "De Tamarinde",
    applyJob = (
      <Button type="primary" style={{ marginTop: "16px" }}>
        view job
      </Button>
    ),
    url
  } = props;
  const src = url || DefaultCover;
  const { Meta } = Card;

  return (
    <Card
      className={"tb-margin-bottom-large"}
      hoverable
      style={{ width: "100%" }}
      cover={<img alt="example" src={DefaultCover} />}
    >
      <div className={"tb-job-time"}>
        <Text
          strong
          style={{ color: "#6d6eed" }}
          className={"tb-margin-bottom-medium"}
        >
          {jobTime}
        </Text>
      </div>
      <Meta
        title={orgName}
        className={"tb-cover-desc"}
        description={location}
      />
      {applyJob}
    </Card>
  );
}

export default JobCard;
