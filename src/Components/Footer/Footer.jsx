import React from "react";
import { List, Button, Typography } from "antd";
import "./Footer.scss";

function Footer(props) {
  const { Text, Title } = Typography;
  const links = [
    <a href="https://ant.design">this is a test</a>,
    <a href="https://ant.design">this is a test</a>
  ];
  const data = [
    {
      title: <Text strong>Quick links</Text>
    },
    {
      title: <Text strong>Organizations</Text>
    },
    {
      title: <Text strong>Help</Text>
    },
    {
      title: <Text strong>Community</Text>
    }
  ];
  return (
    <div className={"tb-footer"}>
      <div className={"centered"}>
        <List
          grid={{
            gutter: 16,
            xs: 2,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 4
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta title={item.title} description={links} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Footer;
