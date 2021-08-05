/*
 * @Descripttion: 使用useState存储函数
 * @Author: huangjitao
 * @Date: 2021-08-06 07:00:59
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import { useState } from "react";
const { Title, Text, Paragraph } = Typography

const FunctionState = () => {
  const [callback, setCallback] = useState(() => () => {alert('init')})
  return (
    <Typography>
      <Title level={3}>实例：如何存储函数</Title>
      <Paragraph>基于useState的惰性初始化，因此可以在传入一个函数，该函数返回一个我们需要存储的函数</Paragraph>
      <Button onClick={() => {setCallback(() => () => {alert('change')})}} className="bnt-margin">更改函数</Button>
      <Button onClick={callback} className="bnt-margin">执行函数</Button>
    </Typography>
  );
}

export default FunctionState