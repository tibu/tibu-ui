import React, { useState } from "react";
import TbHeader from "../../Components/TbHeader";
import TbHeaderMobile from "../../Components/TbHeaderMobile";
import SideBarCard from "../../Components/SideBarCard";
import CoverPhoto from "../../Components/CoverPhoto";
import Description from "../../Components/Description";
import DescriptionOrg from "../../Components/DescriptionOrg";
import TimeRegistration from "../../Components/TimeRegistration";
import TableFilters from "../../Components/TableFilters";
import TabsCard from "../../Components/TabsCard";
import TbMenu from "../../Components/TbMenu";
import GeneralInfo from "../../Components/GeneralInfo";
import TbTags from "../../Components/TbTags";
import TbTimeline from "../../Components/TbTimeline";
import "../../App.scss";

import { Alert, Typography, Tag, Row, Icon, Col, Tabs, Divider } from "antd";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Profile = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="App">
      <div className={"main-content"}>
        <div className="centered">
          <Row gutter={24}>
            <Col xs={0} sm={0} md={0} lg={5}>
              <SideBarCard />
              <Title level={4}>Menu</Title>
              <Divider />
              <TbMenu />
            </Col>
            <Col xs={24} sm={24} md={24} lg={19}>
              <Title level={3} className="tb-margin-bottom-medium">
                Welcome back, Jane
              </Title>
              <Text type="secondary" className="tb-margin-bottom-large">
                <span style={{ display: "inline-block", marginRight: "8px" }}>
                  <Icon
                    type="notification"
                    style={{ marginRight: "10px", display: "inline-block" }}
                    theme="twoTone"
                    twoToneColor="#6d6eed"
                  />
                  Your quick stats:
                </span>
                <Tag style={{ marginBottom: "8px" }}>13 Pending time logs</Tag>
                <Tag style={{ marginBottom: "8px" }} color="green">
                  20 Approved time logs
                </Tag>
                <Tag style={{ marginBottom: "8px" }} color="red">
                  99+ Declined time logs
                </Tag>
                <Tag style={{ marginBottom: "8px" }} color="red">
                  3 Job requests
                </Tag>
              </Text>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Home" key="1">
                  <Alert
                    message="Time registration not succesful"
                    description="You something went really really wrong."
                    type="error"
                    className={"tb-margin-bottom-medium"}
                    showIcon
                    closable
                  />
                  <Description
                    cardHeader={"Time resgistration"}
                    cardHeaderTags={false}
                    extraLink={false}
                  >
                    <TimeRegistration />
                  </Description>
                  <Divider />
                  <Row gutter="24" className={"tb-margin-bottom-large"}>
                    <Col span={24}>
                      <TableFilters />
                    </Col>
                  </Row>
                  <TabsCard
                    cardHeader={"Time resgistration"}
                    extraLink={false}
                  />
                </TabPane>
                <TabPane tab="Profile" key="2">
                  <Description
                    cardHeader={"General information"}
                    cardHeaderTags={false}
                    extraLink={false}
                  >
                    <GeneralInfo />
                  </Description>
                  <Divider />
                  <Description
                    cardHeader={"Bio"}
                    cardHeaderTags={false}
                    extraLink={false}
                  >
                    <Text editable>
                      The world of healthcare is on the move. This requires a
                      creative approach from all parties involved. In many
                      cases, care can be organized differently, and clients,
                      care providers and financiers can benefit from this. That
                      is why Stichting De Linde focuses on innovation. We do
                      this mainly in collaboration with our sister organizations
                      De Tamarinde and De Portuur . Below we present three
                      initiatives that we have launched in the recent period.
                      These are three new platforms that stem from our principle
                      of scaling up and down scaling. De Linde always provides a
                      professional framework and a sounding board for these
                      platforms, so that the quality of the service is
                      guaranteed.
                    </Text>
                  </Description>
                  <Divider />
                  <Description
                    cardHeader={"Characterestics"}
                    cardHeaderTags={false}
                    extraLink={false}
                  >
                    <TbTags />
                  </Description>
                  <Divider />
                  <Description
                    cardHeader={"Experience"}
                    cardHeaderTags={false}
                    extraLink={false}
                  >
                    <TbTimeline />
                  </Description>
                  <Divider />
                  <Description
                    cardHeader={"Education"}
                    cardHeaderTags={false}
                    extraLink={false}
                  >
                    <TbTimeline />
                  </Description>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;
