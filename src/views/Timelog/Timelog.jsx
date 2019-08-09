import React, { useState } from "react";
import TbHeader from "../../Components/TbHeader";
import TbHeaderMobile from "../../Components/TbHeaderMobile";
import SideBarCard from "../../Components/SideBarCard";
import TbTabs from "../../Components/TbTabs";
import "../../App.scss";
import Description from "../../Components/Description"
import TimeRegistration from "../../Components/TimeRegistration"
import TableFilters from "../../Components/TableFilters"
import TabsCard from "../../Components/TabsCard"

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

  

const Timelog = ()=>{
    return(
        <div className="App">
        <div className={"main-body-header"}>
          <div className={"centered"}>
            <TbHeader />
          </div>
        </div>
        <Divider style={{ marginTop: "0px", marginBottom: "0px" }} />
        <div className={"centered"}>
          <TbHeaderMobile />
        </div>
        <Divider
          className={"tb-margin-bottom-large"}
          style={{ marginTop: "0px" }}
        />
        <div className={"main-content"}>
          <div className="centered">
            <Row gutter={24}>
              <Col xs={0} sm={0} md={0} lg={5}>
                <SideBarCard />
              </Col>
              <Col xs={24} sm={24} md={24} lg={19}>
                
              <Title level={3} className="tb-margin-bottom-medium">
          Welcome back, Jane
        </Title>
        <Text type="secondary" className="tb-margin-bottom-larger">
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
        <Divider
          className={"tb-margin-bottom-medium"}
          style={{ marginTop: "0px" }}
        />
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
        <Description
          cardHeader={"From july 1st to july 31"}
          cardHeaderTags={false}
          extraLink={false}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Row gutter={24}>
                <Col span={4} style={{ textAlign: "center" }}>
                  <Tooltip title="3 done / 3 in progress / 4 to do">
                    <Progress
                      percent={100}
                      successPercent={60}
                      type="circle"
                      width={70}
                      strokeColor="#e34f70"
                    />
                  </Tooltip>
                </Col>
                <Col span={20}>
                  <Text strong className={"tb-margin-bottom-small"}>
                    General load of all your week hours
                  </Text>
                  <div>
                    <Text>
                      Tibu automatically detects your registered hours and tasks
                      and calculates the percentage to help you with a neat
                      summary.
                    </Text>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12} style={{ borderLeft: "1px solid #00000024" }}>
              <Row gutter={24}>
                <Col
                  span={4}
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    lineHeight: "68px",
                    verticalAlign: "middle",
                    height: "71px"
                  }}
                >
                  <Text
                    level={4}
                    style={{
                      fontSize: "36px",
                      lineHeight: "68px",
                      verticalAlign: "middle",
                      height: "71px",
                      color: "#FFF",
                      display: "block",
                      backgroundColor: "#87d068",
                      borderRadius: "2px"
                    }}
                  >
                    23
                  </Text>
                </Col>
                <Col span={20}>
                  <Text strong className={"tb-margin-bottom-small"}>
                    Total week hours
                  </Text>
                  <div>
                    <Text>
                      Tibu automatically detects your registered hours and give
                      you a total.
                    </Text>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Description>
        <Title level={4} className="tb-margin-bottom-large">
          Time log
        </Title>
        <Divider
          className={"tb-margin-bottom-large"}
          style={{ marginTop: "0px" }}
        />
        <Row gutter="24" className={"tb-margin-bottom-large"}>
          <Col span={24}>
            <TableFilters />
          </Col>
        </Row>
        <TabsCard cardHeader={"Time resgistration"} extraLink={false} />

              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
}

export default Timelog