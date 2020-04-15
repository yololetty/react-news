import React from "react";
import { Row, Col, Menu, Modal, Button } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import logo from "../assets/images/news.png";
import PCRegister from "./pc_register";

export default class PCHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: "top",
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
	handleClick(key) {
		this.setState({ tabKey: key });
		this.setModalVisible(true);
	}
	render() {
		const userShow = this.state.logined ? (
			<aside>
				<Button type="primary" htmlType="button">
					{this.state.userName}
				</Button>
				&nbsp;&nbsp;
				{/* <Link target="_blank">
					<Button type="dashed" htmlType="button">
						个人中心
					</Button>
				</Link> */}
				&nbsp;&nbsp;
				<Button type="ghost" htmlType="button">
					退出
				</Button>
			</aside>
		) : (
			<aside>
				<Button onClick={this.handleClick.bind(this, "2")} type="link">
					注册
				</Button>
				|
				<Button onClick={this.handleClick.bind(this, "1")} type="link">
					登录
				</Button>
			</aside>
		);
		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="header-logo">
							<img src={logo} alt="logo" />
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={12}>
						<Menu mode="horizontal" selectedKeys={[this.state.current]}>
							<Menu.Item key="top">
								<MailOutlined />
								头条
							</Menu.Item>
							<Menu.Item key="social">
								<AppstoreOutlined />
								社会
							</Menu.Item>
							<Menu.Item key="domestic">
								<AppstoreOutlined />
								国内
							</Menu.Item>
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
					</Col>
					<Col span={2}></Col>
					<Col span={4} className="user-menu">
						{userShow}
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
					</Col>
				</Row>
			</header>
		);
	}
}
