import React from "react";
import "./UsersList.scss";
import { Avatar, List, Popconfirm } from "antd";

function UsersList(props) {
  const data = [
    {
      title: "Jane Doe"
    },
    {
      title: "John Does"
    },
    {
      title: "James doe"
    },
    {
      title: "Mike Doe"
    }
  ];
  const { FormLink = <a>Assign</a> } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item
          actions={[
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
              <a href="#">Profile</a>
            </Popconfirm>,
            FormLink
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="example@email.com"
          />
        </List.Item>
      )}
    />
  );
}

export default UsersList;
