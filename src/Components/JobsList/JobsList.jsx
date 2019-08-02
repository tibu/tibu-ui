import React from "react";
import "./JobsList.scss";
import { Avatar, List, Popconfirm, Icon } from "antd";

function Description(props) {
  const data = [
    {
      title: "Woonvoorziening de De Perenboom | Fri 26 Jul : 16:30 -22:00"
    },
    {
      title: "Woonvoorziening de De Perenboom | Fri 26 Jul : 16:30 -22:00"
    },
    {
      title: "Woonvoorziening de De Perenboom | Fri 26 Jul : 16:30 -22:00"
    },
    {
      title: "Woonvoorziening de De Perenboom | Fri 26 Jul : 16:30 -22:00"
    }
  ];
  const {
    location = " Diamantlaan 2, 2132 WV Hoofddorp",
    FormLink = <a>Assign</a>
  } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item
          actions={[
            FormLink,
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
              <a href="#" style={{ color: "#e34f70" }}>
                Delete
              </a>
            </Popconfirm>
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                icon="medicine-box"
                style={{ backgroundColor: "#6d6eed" }}
              />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description={location}
          />
        </List.Item>
      )}
    />
  );
}

export default Description;
