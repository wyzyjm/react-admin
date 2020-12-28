import React, { Component } from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { Layout } from 'antd';

// 全部样式
import './admin.less';

/**
 * 引入组件
 * 1. 左侧导航
 * 2. 头部
 * 
 * 子路由
 * 1. home
 * 2. category
 * 3. product
 * 4. user
 * 5. role
 * 6. charts/bar
 * 7. charts/line
 * 8. charts/pie
 */
import LeftNav from '../../components/left-nav';
import Head from '../../components/head'

import Home from '../home/home';
import Category from '../category/category';
import Product from '../product/product';
import User from '../user/user';
import Role from '../role/role';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';

const { Footer, Sider, Content } = Layout;

// 底部样式
const styleObj = {
    content: {
        margin:20
    },
    foot: {
        textAlign: 'center',
        color: 'rgba(0,0,0,.5)'
    }
}

export default class Admin extends Component {
    render() {
        return (
            <Layout className='admin-layout'>
                {/* 侧边栏 */}
                <Sider className="admin-sider">
                    {/* 导航 */}
                    <LeftNav />
                </Sider>
                <Layout>
                    {/* 头部 */}
                    <Head ></Head>
                    {/* 内容 */}
                    <Content style={styleObj.content}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/Category" component={Category} />
                            <Route path="/Product" component={Product} />
                            <Route path="/user" component={User} />
                            <Route path="/role" component={Role} />
                            <Route path="/charts/bar" component={Bar} />
                            <Route path="/charts/line" component={Line} />
                            <Route path="/charts/pie" component={Pie} />
                            <Redirect to="/home" />
                        </Switch>
                    </Content>
                    {/* 底部 */}
                    <Footer style={styleObj.foot}>推荐使用谷歌浏览器,使用效果更佳</Footer>
                </Layout>
            </Layout>
        )
    }
}