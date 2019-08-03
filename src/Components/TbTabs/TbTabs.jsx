import React from "react";
import "./TbTabs.scss";
import CoverPhoto from "../CoverPhoto";
import Description from "../Description";
import DescriptionOrg from "../DescriptionOrg";
import JobCard from "../JobCard";
import TimeRegistration from "../TimeRegistration";
import TableFilters from "../TableFilters";
import TbLists from "../TbLists";
import TabsCard from "../TabsCard";
import UsersList from "../UsersList";
import JobsList from "../JobsList";
import TbDrawer from "../Drawer";
import DrawerAssign from "../DrawerAssign";
import GeneralInfo from "../GeneralInfo";
import TbTags from "../TbTags";
import TbTimeline from "../TbTimeline";
import Login from "../Login";
import SignUp from "../SignUp";
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
import DrawerCreate from "../DrawerCreate/DrawerCreate";

function TbTabs(props) {
  const {
    tabMenu = [
      "Home",
      "Job page",
      "Jobs",
      "Time log",
      "Lists",
      "Managers",
      "Profile",
      "Login",
      "Sign Up"
    ]
  } = props;
  const { TabPane } = Tabs;
  const { Title, Text } = Typography;
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
  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab={tabMenu[0]} key="1">
        <CoverPhoto />
        <Description
          cardHeader={"About"}
          cardHeaderTags={false}
          extraLink={false}
        >
          <Text editable>
            The world of healthcare is on the move. This requires a creative
            approach from all parties involved. In many cases, care can be
            organized differently, and clients, care providers and financiers
            can benefit from this. That is why Stichting De Linde focuses on
            innovation. We do this mainly in collaboration with our sister
            organizations De Tamarinde and De Portuur . Below we present three
            initiatives that we have launched in the recent period. These are
            three new platforms that stem from our principle of scaling up and
            down scaling. De Linde always provides a professional framework and
            a sounding board for these platforms, so that the quality of the
            service is guaranteed.
          </Text>
        </Description>
        <Alert
          message="Application succesful"
          description="You will get an email at someone@email.com once approved"
          type="success"
          className={"tb-margin-bottom-medium"}
          showIcon
          closable
        />
        <Description cardHeader={"Jobs"} cardHeaderTags={false}>
          <DescriptionOrg />
        </Description>
      </TabPane>
      <TabPane tab={tabMenu[1]} key="2">
        <Alert
          message="Application succesful"
          description="You will get an email at someone@email.com once approved"
          type="success"
          className={"tb-margin-bottom-medium"}
          showIcon
          closable
        />
        <CoverPhoto orgName={"Fri 26 Jul : 16:30 -22:00"} uploader={false} />
        <Description cardHeader={"Description"} extraLink={false}>
          <p>
            The world of healthcare is on the move. This requires a creative
            approach from all parties involved. In many cases, care can be
            organized differently, and clients, care providers and financiers
            can benefit from this. That is why Stichting De Linde focuses on
            innovation. We do this mainly in collaboration with our sister
            organizations De Tamarinde and De Portuur . Below we present three
            initiatives that we have launched in the recent period. These are
            three new platforms that stem from our principle of scaling up and
            down scaling. De Linde always provides a professional framework and
            a sounding board for these platforms, so that the quality of the
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
      </TabPane>
      <TabPane tab={tabMenu[2]} key="3">
        <Title level={3} className="tb-margin-bottom-nil">
          Available jobs in your area
        </Title>
        <Text type="secondary" className="tb-margin-bottom-larger">
          11280 results
        </Text>
        <Text strong className="tb-margin-bottom-medium">
          Sunday 28 July
        </Text>
        <Divider
          className={"tb-margin-bottom-medium"}
          style={{ marginTop: "0px" }}
        />
        <Row gutter={24}>
          <Col sxs={24} sm={12} md={16} lg={16}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
        </Row>
        <Text strong className="tb-margin-bottom-medium">
          Monday 29 July
        </Text>
        <Divider
          className={"tb-margin-bottom-medium"}
          style={{ marginTop: "0px" }}
        />
        <Row gutter={24}>
          <Col sxs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <JobCard />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab={tabMenu[3]} key="4">
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
      </TabPane>
      <TabPane tab={tabMenu[4]} key="5">
        <TbLists />
      </TabPane>
      <TabPane tab={tabMenu[5]} key="6">
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
        <Row gutter="24" className={"tb-margin-bottom-large"}>
          <Col span={24}>
            <TableFilters />
          </Col>
        </Row>
        <TabsCard cardHeader={"Time resgistration"} extraLink={false} />
        <Divider />
        <Description
          cardHeader={"Caregivers"}
          cardHeaderTags={false}
          extraLink={<TbDrawer />}
        >
          <UsersList FormLink={<DrawerAssign />} />
        </Description>
        <Divider />
        <Description
          cardHeader={"Managers"}
          cardHeaderTags={false}
          extraLink={<TbDrawer />}
        >
          <UsersList FormLink={<DrawerAssign />} />
        </Description>
        <Divider />
        <Description
          cardHeader={"Jobs"}
          cardHeaderTags={false}
          extraLink={<DrawerCreate />}
        >
          <JobsList FormLink={<DrawerAssign />} />
        </Description>
      </TabPane>
      <TabPane tab={tabMenu[6]} key="7">
        <Title level={3} className="tb-margin-bottom-medium">
          Welcome back, Jane
        </Title>
        <Text type="secondary" className="tb-margin-bottom-larger">
          <span style={{ display: "inline-block", marginRight: "8px" }}>
            <Icon
              type="sound"
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
            The world of healthcare is on the move. This requires a creative
            approach from all parties involved. In many cases, care can be
            organized differently, and clients, care providers and financiers
            can benefit from this. That is why Stichting De Linde focuses on
            innovation. We do this mainly in collaboration with our sister
            organizations De Tamarinde and De Portuur . Below we present three
            initiatives that we have launched in the recent period. These are
            three new platforms that stem from our principle of scaling up and
            down scaling. De Linde always provides a professional framework and
            a sounding board for these platforms, so that the quality of the
            service is guaranteed.
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
      <TabPane tab={tabMenu[7]} key="8">
        <Login />
      </TabPane>
      <TabPane tab={tabMenu[8]} key="9">
        <SignUp />
      </TabPane>
    </Tabs>
  );
}

export default TbTabs;
