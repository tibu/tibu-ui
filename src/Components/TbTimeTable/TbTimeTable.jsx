import React from "react";
import "./TbTimeTable.scss";
import { Table, Divider, Tag } from "antd";

function TbTimeTable(props) {
  const {
    QuickLinks = [
      <a href="javascript:;">Approve</a>,
      <Divider type="vertical" />,
      <a href="javascript:;" style={{ color: "#e34f70" }}>
        Decline
      </a>
    ]
  } = props;
  const columns = [
    {
      title: "Work item",
      dataIndex: "workItem",
      key: "workItem",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "Organization",
      dataIndex: "organization",
      key: "organization"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime"
    },
    {
      title: "End time",
      dataIndex: "endTime",
      key: "endTime"
    },
    {
      title: "Total time",
      dataIndex: "totalTime",
      key: "totalTime"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => <span>{QuickLinks}</span>
    }
  ];

  const data = [
    {
      key: "1",
      workItem: "Woonvoorziening de De Perenboom",
      organization: "Stichting De Halve Boom",
      date: "	Jul. 15, 2019",
      startTime: ["09:00"],
      endTime: ["14:00"],
      totalTime: ["5:00"]
    },
    {
      key: "1",
      workItem: "Woonvoorziening de De Perenboom",
      organization: "Stichting De Halve Boom",
      date: "	Jul. 15, 2019",
      startTime: ["09:00"],
      endTime: ["14:00"],
      totalTime: ["5:00"]
    },
    {
      key: "1",
      workItem: "Woonvoorziening de De Perenboom",
      organization: "Stichting De Halve Boom",
      date: "	Jul. 15, 2019",
      startTime: ["09:00"],
      endTime: ["14:00"],
      totalTime: ["5:00"]
    },
    {
      key: "1",
      workItem: "Woonvoorziening de De Perenboom",
      organization: "Stichting De Halve Boom",
      date: "	Jul. 15, 2019",
      startTime: ["09:00"],
      endTime: ["14:00"],
      totalTime: ["5:00"]
    },
    {
      key: "1",
      workItem: "Woonvoorziening de De Perenboom",
      organization: "Stichting De Halve Boom",
      date: "	Jul. 15, 2019",
      startTime: ["09:00"],
      endTime: ["14:00"],
      totalTime: ["5:00"]
    },
    {
      key: "1",
      workItem: "Woonvoorziening de De Perenboom",
      organization: "Stichting De Halve Boom",
      date: "	Jul. 15, 2019",
      startTime: ["09:00"],
      endTime: ["14:00"],
      totalTime: ["5:00"]
    }
  ];

  return (
    <Table columns={columns} dataSource={data} className={"responsiveTable"} />
  );
}

export default TbTimeTable;
