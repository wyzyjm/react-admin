import React, { Component } from 'react'
import './login.less'

// 引入 antd 表单
import { Form, Input, Button } from 'antd';

// 引入icon
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';

// 引入图片
import logo from './images/Logo.png'

// const Item = Form.Item; // 自定义item 标签

/**
 * 所需数据定义 
 */

/**
 * antd 表单使用
 * 都可以添加自定义类名
 * 
 * Form
 *  onFinish : 监听表单提交事件
 * 
 * FormItem
 *  label
 *  name
 *  rules
 */

export default class Login extends Component {
    /**
     * 验证密码
     */
    validatePassword = (rule, value, callback) => {
        try {
            if (!value) {
                return Promise.reject('请输入密码')
            } else if (value.length < 4) {
                return Promise.reject('密码长度不能小于4位')
            } else if (value.length > 12) {
                return Promise.reject('密码长度不能大于12位')
            } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                return Promise.reject('密码必须是字母.数字或下划线组成')
            } else {
                return Promise.resolve() // 必须调用, 验证通过
            }
        } catch (err) {
            return Promise.resolve(err)
        }
    }
    /**
     * 表单提交事件
     * */
    handleSubmit = velues => {
        // values 表单数据对象
        console.log('提交成功', velues)
    }
    /**
     * 提交失败
     */
    handleFiled = err => {
        console.log('提交失败',err)
    }

    render() {

        return <div className="login">
            {/* 内容 */}
            <section className="login-content">
                <div className="login-logo">
                    <img src={logo} alt="logo" />
                </div>
                {/* 表单 */}
                <Form
                    className="login-form"
                    onFinish={this.handleSubmit}
                    onFinishFailed = {this.handleFiled}
                >
                    {/* 用户名 */}
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, whitespace: true, message: '请输入用户名' },
                            { min: 3, message: '用户名最少3位' },
                            { max: 8, message: '用户名最多8位' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是字母.数字或下划线组成' }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="login-icon" />}
                            className="login-input"
                            placeholder="用户名"
                        />
                    </Form.Item>
                    {/* 密码 */}
                    <Form.Item
                        name="password"
                        rules={[
                            { validator: this.validatePassword }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="login-icon" />}
                            className="login-input"
                            placeholder="密码"
                        />
                    </Form.Item>
                    {/* 提交 */}
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
                    </Form.Item>
                </Form>

                <span>中企动力资源管理平台</span>
            </section>
        </div>

    }
}