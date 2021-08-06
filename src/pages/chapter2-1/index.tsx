/*
 * @Descripttion: useState的基本用法
 * @Author: huangjitao
 * @Date: 2021-08-05 19:41:08
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import { useState } from "react";

const { Title, Text, Paragraph } = Typography;

const Chapter2_1 = () => {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <Typography>
      <Title level={2}>基本用法</Title>
      <Paragraph>
        <Text code>const [state, setState] = useState(initValue)</Text>{" "}
      </Paragraph>
      <Paragraph>useState使React函数组件拥有了状态。</Paragraph>
      <ul>
        <li>括号里的initValue是state的初始值。</li>
        <li>
          数组解构的第一个参数是最新的state值，每次state的值的改变将触发页面重新渲染。
        </li>
        <li>
          数组解构的第二个参数是state的更新函数，通过给setState(newState)传递参数newState来改变状态值（state)，并引发页面的重新渲染。
        </li>
      </ul>
      <Title level={3}>实例</Title>
      <p>点击次数：{count}</p>
      <Button onClick={() => setCount(count + 1)}>点击增加</Button>
    </Typography>
  );
};

export default Chapter2_1;
