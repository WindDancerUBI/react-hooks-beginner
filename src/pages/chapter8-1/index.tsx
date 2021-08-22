/*
 * @Descripttion: React.forwardRef
 * @Author: huangjitao
 * @Date: 2021-08-22 15:48:22
 * @Function: 该文件用途描述
 */


import { Button, Typography } from "antd";
import React  from "react";
import Child from "./Child";
const { Title, Paragraph } = Typography;

function Chapter8_1() {
  const ref = React.createRef<any>()

  const focus = () => {
    console.log(ref)
    ref.current.focus()
  }

  return (
    <Typography>
      <Title level={2}>React.forwardRef的使用</Title>
      <Paragraph>
        useImperativeHandle 应当与 forwardRef 一起使用。因此首先我们来研究一下React.forwardRef的作用。
      </Paragraph>
      <Title level={3}>案例</Title>
      <Paragraph>
        定义一个子组件Child，它包裹有一个输入框Input。在父组件中定义一个按钮点击事件，在该事件中去触发子组件Child中的Input组件的focus（聚焦）事件。
        而组件Input和父组件之间还有一个子组件Child，而React.forwardRef的作用就是在中间转发ref。
      </Paragraph>
      <div style={{ padding: 10, border: '1px solid #000' }}>
        <h1>父组件</h1>
        <Button onClick={focus} style={{ marginBottom: 15 }}>聚焦子组件Input</Button>
        <Child ref={ref} />
      </div>
    </Typography>
  );
}

export default Chapter8_1;
