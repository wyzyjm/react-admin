import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

/**
 * 导入antd 
 * 1. 组件
 * 2. 图标
 */
import { Menu } from 'antd';
// import {
//     AppstoreOutlined,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     PieChartOutlined,
//     DesktopOutlined,
//     ContainerOutlined,
//     MailOutlined,
// } from '@ant-design/icons';`

import menuList from '../../config/menu.js';
import './index.less';
import logo from '../../assets/images/Logo.png';

const { SubMenu, Item } = Menu;

class LeftNav extends Component {

    // 根据数据动态生成 导航
    getMenuNodes = (data) => {
        const path = this.props.history.location.pathname
        return data.reduce((total, item) => {
            if (!item.children) {
                total.push((
                    <Item key={item.key} >
                        <Link to={item.key}>
                            {item.title}
                        </Link>
                    </Item>
                ))
            } else {
                const cItem = item.children.find(citem => path.indexOf(citem.key) === 0 )
                if (cItem) {
                    this.openkey = item.key
                }
                total.push((
                    <SubMenu
                        key={item.key}
                        title={item.title}
                    >
                        { this.getMenuNodes(item.children)}
                    </SubMenu>
                ))
            }
            return total
        },[])
    }
    /***
     * 第一次render() 之前执行
     * 必须是一个同步的
     */
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }
    render() {
        // 高亮选项
        const path = this.props.history.location.pathname
        // 默认展开
        const openkey = this.openkey
        // const openkey = '/charts'
        return (
            <div className="left-nav">
                {/* 导航头部 */}
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                {/* 导航 */}
                <Menu
                    defaultOpenKeys={[openkey]}
                    selectedKeys={[path]}
                    mode="inline"
                    theme="dark"
                >
                    {this.menuNodes}
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav)