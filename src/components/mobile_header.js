import React from 'react';
import { Button } from "antd";
import { PicLeftOutlined, UserOutlined } from "@ant-design/icons";
import logo from '../assets/images/news.png'
export default class MobileHeader extends React.Component {
  render() {
    return (
      <header>
          <Button type="primary" icon={<PicLeftOutlined />} ></Button>
        <a href="/" className="header-logo">
          <img src={logo} alt="logo" />
          <span>ReactNews</span>
        </a>
          <Button type="primary" icon={<UserOutlined />} ></Button>
      </header>
    )
  }
}