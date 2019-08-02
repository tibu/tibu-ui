import React from "react";
import DefaultCover from "./tibucover.png";
import "./CoverPhoto.scss";
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

function CoverPhoto(props) {
  const { Title } = Typography;
  const {
    location = [
      <Icon type="environment" />,
      " Diamantlaan 2, 2132 WV Hoofddorp"
    ],
    orgName = "De Tamarinde",
    uploader = (
      <Button style={{ position: "absolute", top: "16px", left: "15px" }}>
        <Icon type="upload" /> Click to Upload
      </Button>
    ),
    url
  } = props;
  const src = url || DefaultCover;
  const { Meta } = Card;

  return (
    <Card
      className={"tb-margin-bottom-large"}
      style={{ width: "100%", position: "relative" }}
      cover={<img alt="example" src={DefaultCover} />}
    >
      {uploader}
      <Meta
        title={orgName}
        className={"tb-cover-desc"}
        description={location}
      />
    </Card>
  );
}

export default CoverPhoto;
