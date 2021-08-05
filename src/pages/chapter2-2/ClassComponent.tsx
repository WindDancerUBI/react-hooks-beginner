/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-08-05 21:06:15
 * @Function: 该文件用途描述
 */

import { Button } from 'antd'
import React from 'react'

export default class ClassComponent extends React.Component {
  state = {
    number: 0,
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
    console.log('1', this.state.number)
    this.setState({
      number: this.state.number + 2
    })
    console.log('2', this.state.number)
    this.setState({
      number: this.state.number + 3
    })
    console.log('3', this.state.number)
    setTimeout(() => {
      this.setState({
        number: this.state.number + 1
      })
      console.log('4', this.state.number)
      this.setState({
        number: this.state.number + 2
      })
      console.log('5', this.state.number)
      this.setState({
        number: this.state.number + 3
      })
      console.log('6', this.state.number)
    }, 10)

  }
  render() {
    return (
      <div>
        <p>数字：{this.state.number}</p>
        <Button onClick={this.handleClick} className="bnt-margin">增加</Button>
        <Button onClick={() => this.setState({number: 0})} className="bnt-margin">重置</Button>
      </div>
    )
  }
}
