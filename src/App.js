
import React, { Component } from 'react'
import { Button } from 'antd'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello React</h1>
        <Button type="primary">蓝色-按钮</Button>
        <Button type="danger">红色-按钮</Button>
      </div>
    )
  }
}