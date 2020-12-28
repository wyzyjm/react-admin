
import React, { Component } from 'react'
// 引入路由
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


/**
 * 引入组件
 * 1. 登录
 * 2. 主页
 */
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* 登录页 */}
          <Route path="/login" component={Login} />
          {/* 主界面 */}
          <Route path="/" component={Admin} />
        </Switch>
      </Router>
    )
  }
}