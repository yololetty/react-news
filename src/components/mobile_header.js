import React from "react";
import { Button, Dropdown, Menu, Modal } from "antd";
import {
	PicLeftOutlined,
	UserOutlined,
	AppstoreOutlined,
} from "@ant-design/icons";
import logo from "../assets/images/news.png";
import PCRegister from "./pc_register";
export default class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
      userCurrent: "login",
      logined: false,
			modalVisible: false,
			tabKey: "2",
			userName: "",
			userid: ""
		};
  }
  setUserInfo(list) {
		this.setState({
			userName: list.userName,
			userid: list.userid,
			logined: true
		})
	}
	setModalVisible(value) {
		this.setState({ modalVisible: value });
  }
  handleOk = (e) => {
		console.log(e);
		this.setModalVisible(false);
	};
	handleCancel = (e) => {
		this.setModalVisible(false);
	};
	handleUserClick = (e) => {
		console.log(e);
		this.setState({
			userCurrent: e.key,
    });
    this.setModalVisible(true);
	};
	render() {
		const userMenu = (
      this.state.logined ? 
      <Menu>
				<Menu.Item key="login">{this.state.userName}</Menu.Item>
				<Menu.Item key="register">登出</Menu.Item>
			</Menu> : 
			<Menu onClick={this.handleUserClick}>
				<Menu.Item key="login">登录</Menu.Item>
				<Menu.Item key="register">注册</Menu.Item>
			</Menu>
		);
		const newsMenu = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item>头条</Menu.Item>
				<Menu.Item>社会</Menu.Item>
				<Menu.Item>国内</Menu.Item>
				<Menu.Item key="international">
					<AppstoreOutlined />
					国际
				</Menu.Item>
				<Menu.Item key="entertainment">
					<AppstoreOutlined />
					娱乐
				</Menu.Item>
				<Menu.Item key="sports">
					<AppstoreOutlined />
					体育
				</Menu.Item>
				<Menu.Item key="technology">
					<AppstoreOutlined />
					科技
				</Menu.Item>
				<Menu.Item key="fashion">
					<AppstoreOutlined />
					时尚
				</Menu.Item>
			</Menu>
		);
		return (
			<header>
				<Dropdown overlay={newsMenu} placement="bottomLeft">
					<Button type="primary" icon={<PicLeftOutlined />}></Button>
				</Dropdown>
				<a href="/" className="header-logo">
					<img src={logo} alt="logo" />
					<span>ReactNews</span>
				</a>
				<Dropdown overlay={userMenu} placement="bottomRight">
					<Button type="primary" icon={<UserOutlined />}></Button>
				</Dropdown>
				<Modal
					title="用户中心"
					wrapClassName="vetical-center-modal"
					visible={this.state.modalVisible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					okText="关闭"
				>
					<PCRegister
						tabKey={this.state.tabKey}
						setModalVisible={this.setModalVisible.bind(this)}
						setUserInfo={this.setUserInfo.bind(this)}
					></PCRegister>
				</Modal>
			</header>
		);
	}
}
