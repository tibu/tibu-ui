import React, { useState } from "react";
import TbHeader from "../../Components/TbHeader";
import TbHeaderMobile from "../../Components/TbHeaderMobile";
import SideBarCard from "../../Components/SideBarCard";
import TbTabs from "../../Components/TbTabs";
import Description from "../../Components/Description";
import GeneralInfo from "../../Components/GeneralInfo";
import TbTags from "../../Components/TbTags";
import TbMenu from "../../Components/TbMenu";
import CoverPhoto from "../../Components/CoverPhoto";
import "../../App.scss";
import {
  Tabs,
  Typography,
  Alert,
  Divider,
  Tag,
  List,
  Button,
  Row,
  Col,
  Progress,
  Tooltip,
  Card,
  Icon
} from "antd";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const skillSet = [
  <Text strong>
    Discipline :
    <Text
      style={{
        display: "inline-block",
        fontWeight: "normal",
        paddingLeft: "8px"
      }}
    >
      Nursing/Care
    </Text>
  </Text>,
  <Text strong>
    Completed training :
    <Text
      style={{
        display: "inline-block",
        fontWeight: "normal",
        paddingLeft: "8px"
      }}
    >
      HBO
    </Text>
  </Text>,
  <Text strong>
    Work experience :
    <Text
      style={{
        display: "inline-block",
        fontWeight: "normal",
        paddingLeft: "8px"
      }}
    >
      3-10 Years
    </Text>
  </Text>,
  <Text strong>
    Specialty :
    <Text
      style={{
        display: "inline-block",
        fontWeight: "normal",
        paddingLeft: "8px"
      }}
    >
      Mental healthy
    </Text>
  </Text>,
  <Text strong>
    Position :
    <Text
      style={{
        display: "inline-block",
        fontWeight: "normal",
        paddingLeft: "8px"
      }}
    >
      Psychiatry
    </Text>
  </Text>
];

const JobsPage = () => {
  return (
    <div className="App">
      <div className={"main-content"}>
        <div className="centered">
          <Row gutter={24}>
            <Col xs={0} sm={0} md={0} lg={5}>
              <SideBarCard cardCta="Organization profile" page="./org" />
              <Title level={4}>Menu</Title>
              <Divider />
              <TbMenu />
            </Col>
            <Col xs={24} sm={24} md={24} lg={19}>
              <Alert
                message="Application succesful"
                description="You will get an email at someone@email.com once approved"
                type="success"
                className={"tb-margin-bottom-medium"}
                showIcon
                closable
              />
              <CoverPhoto
                orgName={"Fri 26 Jul : 16:30 -22:00"}
                uploader={false}
              />
              <Description cardHeader={"Description"} extraLink={false}>
                <p>
                  The world of healthcare is on the move. This requires a
                  creative approach from all parties involved. In many cases,
                  care can be organized differently, and clients, care providers
                  and financiers can benefit from this. That is why Stichting De
                  Linde focuses on innovation. We do this mainly in
                  collaboration with our sister organizations De Tamarinde and
                  De Portuur . Below we present three initiatives that we have
                  launched in the recent period. These are three new platforms
                  that stem from our principle of scaling up and down scaling.
                  De Linde always provides a professional framework and a
                  sounding board for these platforms, so that the quality of the
                  service is guaranteed.
                </p>
                <Title level={4}>Requirements</Title>
                <Divider />
                <Text
                  style={{ fontWeight: "bold" }}
                  className={"tb-margin-bottom-medium"}
                >
                  Qualities
                </Text>
                <TbTags />
                <Divider />
                <Text
                  style={{ fontWeight: "bold" }}
                  className={"tb-margin-bottom-medium"}
                >
                  Skills
                </Text>
                <List
                  size="small"
                  dataSource={skillSet}
                  renderItem={item => (
                    <List.Item style={{ border: "none", padding: "0 0 8px" }}>
                      {item}
                    </List.Item>
                  )}
                />
              </Description>
              <Button type="primary" className={"tb-margin-bottom-medium"}>
                Send application
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
