import React from "react";
import "./TabsCard.scss";
import { Typography, Card, Button, Icon, Badge } from "antd";
import DynamicCardHeader from "../DynamicCardHeader";
import TbTimeTable from "../TbTimeTable";

const { Title, Text } = Typography;
const TabsCardHeader = (
  <DynamicCardHeader
    cardHeader={"Time logs"}
    cardHeaderTags={false}
    extraLink={
      <Button
        type="secondary"
        style={{ display: "inline-block", marginLeft: "8px" }}
      >
        <Icon type="file" /> Export PDF
      </Button>
    }
  />
);
const tabList = [
  {
    key: "tab1",
    tab: [
      <Badge
        count={25}
        style={{ marginRight: "4px", backrgroundColor: "blue" }}
      />,
      <span>Penging Approval</span>
    ]
  },
  {
    key: "tab2",
    tab: "Approved"
  },
  {
    key: "tab3",
    tab: "Declined"
  }
];
const contentList = {
  tab1: (
    <p>
      <TbTimeTable />
    </p>
  ),
  tab2: (
    <p>
      <TbTimeTable
        QuickLinks={
          <a href="javascript:;" style={{ color: "#e34f70" }}>
            Delete
          </a>
        }
      />
    </p>
  ),
  tab3: (
    <p>
      <TbTimeTable
        QuickLinks={
          <a href="javascript:;" style={{ color: "#e34f70" }}>
            Delete
          </a>
        }
      />
    </p>
  )
};

class TabsCard extends React.Component {
  state = {
    key: "tab1",
    noTitleKey: "app"
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <Card
        style={{ width: "100%" }}
        className={"tb-margin-bottom-large"}
        tabList={tabList}
        title={TabsCardHeader}
        activeTabKey={this.state.key}
        onTabChange={key => {
          this.onTabChange(key, "key");
        }}
      >
        {contentList[this.state.key]}
      </Card>
    );
  }
}

export default TabsCard;
