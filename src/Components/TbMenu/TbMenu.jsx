import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./TbMenu.scss";

const { SubMenu } = Menu;

class TbMenu extends React.Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        className={"sidemenu"}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" /> Home
          </Link>
        </Menu.Item>
        <Menu.Item key="jobs">
          <Link to="/jobs">
            <Icon type="appstore" /> Jobs
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span className="submenu-title-wrapper">
              <Icon type="book" />
              Directory
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">
              <Link to="/caregivers">
                <Icon type="book" />
                Organizations
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to="/caregivers">
                <Icon type="book" />
                Locations
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:3">
              <Link to="/caregivers">
                <Icon type="book" />
                Regions
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Link to="/caregivers">
                <Icon type="book" />
                Caregivers
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="mail" disabled>
          <Icon type="mail" />
          Messages
        </Menu.Item>
        <Menu.Item key="feed" disabled>
          <Icon type="compass" />
          Feed
        </Menu.Item>
        <Menu.Item key="feed" disabled>
          <Icon type="team" />
          Forum
        </Menu.Item>
      </Menu>
    );
  }
}

export default TbMenu;
