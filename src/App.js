
import React, { Component } from 'react'

// 引入路由
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// 引入UI 库
import { Button } from 'antd'

import Login from './pages/login/login.jsx'
import Home from './pages/home/home.jsx'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}