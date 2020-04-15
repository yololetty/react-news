import React from "react";
import { Form, Input, Tooltip, Checkbox, Button, Tabs, message } from "antd";
import {
	QuestionCircleOutlined,
	UserOutlined,
	LockOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};
export default class PCRegister extends React.Component {
	formRef = React.createRef();
	onRegisterFinish = (values) => {
		let myFetchOptions = {
			method: "POST",
		};
		fetch(
			"https://hn216.api.yesapi.cn/?s=App.User.RegisterExt&username=" +
				values.userName +
				"&password=" +
				values.password +
				"&app_key=71DDF7F568886144DCBDD7D8615856C7&sign=2C8CF57FAD848F07BFC3CFDE8B2166CF",
			myFetchOptions
		)
			.then((response) => response.json())
			.then((res) => {
				let data = res.data;
				if (res.ret === 200) {
					if (data.err_code === 0) {
						this.props.setUserInfo({
							userName: values.userName,
							userid: data.uuid,
						});
					}
				}
			});
		message.success("注册成功！");
		this.props.setModalVisible(false);
	};
	onLoginFinish = values => {
		let myFetchOptions = {
			method: "POST",
		};
		fetch(
			"https://hn216.api.yesapi.cn/?s=App.User.LoginExt&username=" +
				values.userName +
				"&password=" +
				values.password +
				"&is_allow_many=1&app_key=71DDF7F568886144DCBDD7D8615856C7&sign=A3304DE3929AEF61E15F593AC1EA3DF9",
			myFetchOptions
		)
			.then((response) => response.json())
			.then((res) => {
				let data = res.data;
				if (res.ret === 200) {
					if (data.err_code === 0) {
						this.props.setUserInfo({
							userName: values.userName,
							userid: data.uuid,
						});
					}
				}
			});
		message.success("登录成功！");
		this.props.setModalVisible(false);
	};
	render() {
		return (
			<Tabs defaultActiveKey={this.props.tabKey}>
				<TabPane tab="登录" key="1">
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{ remember: true }}
						onFinish={this.onLoginFinish}
					>
						<Form.Item
							name="userName"
							rules={[
								{ required: true, message: "请输入你的用户名!" },
							]}
						>
							<Input
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="用户名"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{ required: true, message: "请输入你的密码!" },
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="密码"
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							{/* <a className="login-form-forgot" href="">
								Forgot password
							</a> */}
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
							>
								登录
							</Button>	
						</Form.Item>
					</Form>
				</TabPane>
				<TabPane tab="注册" key="2">
					<Form {...formItemLayout} ref={this.formRef} name="register" onFinish={this.onRegisterFinish}>
						<Form.Item
							name="userName"
							label={
								<span>
									用户名&nbsp;
									<Tooltip title="会作为登录时的用户名；当你评论时，别人能看到你的用户名">
										<QuestionCircleOutlined />
									</Tooltip>
								</span>
							}
							rules={[
								{
									required: true,
									message: "请输入你的用户名!",
									whitespace: true,
								},
							]}
						>
							<Input placeholder="请输入您的用户名" />
						</Form.Item>
						<Form.Item
							name="password"
							label="密码"
							rules={[
								{
									required: true,
									message: "请输入密码!",
								},
							]}
							hasFeedback
						>
							<Input.Password placeholder="请输入您的密码" />
						</Form.Item>
						<Form.Item
							name="confirm"
							label="确认密码"
							dependencies={["password"]}
							hasFeedback
							rules={[
								{
									required: true,
									message: "请输入确认密码!",
								},
								({ getFieldValue }) => ({
									validator(rule, value) {
										if (!value || getFieldValue("password") === value) {
											return Promise.resolve();
										}
										return Promise.reject("两次输入的密码不符合!");
									},
								}),
							]}
						>
							<Input.Password placeholder="请再次输入您的密码" />
						</Form.Item>
						<Form.Item
							name="agreement"
							valuePropName="checked"
							rules={[
								{
									validator: (_, value) =>
										value
											? Promise.resolve()
											: Promise.reject("请勾选认同协议"),
								},
							]}
							{...tailFormItemLayout}
						>
							<Checkbox>
								我已经阅读了 <a href="">此协议</a>
							</Checkbox>
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							<Button
								type="primary"
								htmlType="submit"
							>
								注册
							</Button>
						</Form.Item>
					</Form>
				</TabPane>
			</Tabs>
		);
	}
}
