/*
 * @Descripttion: useState的函数式更新
 * @Author: huangjitao
 * @Date: 2021-08-05 22:03:31
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import { useState } from "react";

const { Title, Text, Paragraph } = Typography

const Chapter2_3 = () => {
  const [num, setNum] = useState(0);

  const addNumAsync = () => {
    setNum(num => num + 1)
    console.log('1', num)
    setNum(num => num + 2)
    console.log('2', num)
    setNum(num => num + 3)
    console.log('3', num)
    setTimeout(() => {
      setNum(num => num + 1)
      console.log('4', num)
      setNum(num => num + 2)
      console.log('5', num)
      setNum(num => num + 3)
      console.log('6', num)
    });
  };

  return (
    <Typography>
      <Title level={2}>setState的函数式更新</Title>
      <Title level={3}>实例：通过函数式更新获取最新的state值</Title>
      <Paragraph>修改上一节的实例3，通过函数式更新获取最新的state值；并且通过函数式更新，来避免React的合并策略</Paragraph>
      <p>数字：{num}</p>
      <Button onClick={addNumAsync}>增加</Button>
    </Typography>
  );
}

export default Chapter2_3