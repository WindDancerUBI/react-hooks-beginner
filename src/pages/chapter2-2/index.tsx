/*
 * @Descripttion: setState是同步的还是异步的
 * @Author: huangjitao
 * @Date: 2021-08-05 20:07:13
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const { Title, Text, Paragraph } = Typography

const Chapter2_2 = () => {
  const [num, setNum] = useState(0);
  const [number, setNumber] = useState(0)

  const addNum = () => {
    setNum(num + 1)
    console.log('num', num)
    setNum(num + 2)
    console.log('num', num)
    setNum(num + 3)
    console.log('num', num)
  };

  return (
    <Typography>
      <Title level={2}>setState的批处理、合并机制</Title>

      <Title level={3}>实例1：依次点击多次调用setState</Title>
      <Paragraph>点击一次增加按钮，连续调用了三次setState，分别将num +1， +2， +3。最后发现，num相较于点击按钮之前只增加了3，而不是预期的6</Paragraph>
      <p>数字：{num}</p>
      <Button onClick={addNum} className="bnt-margin">增加</Button>
      <Button onClick={() => setNum(0)} className="bnt-margin">重置</Button>

      <Title level={3}>实例2: 类组件</Title>
      <Paragraph>现在点击一次增加按钮，先调用三次setState，再在setTimeout里调用三次setState，最后发现这次num点击一次增加的结果是9</Paragraph>
      <ClassComponent />

      <Title level={3}>实例3: 函数组件</Title>
      <Paragraph>重复上面的操作，但是现在将其实现方式改为函数组件。最后发现这次num点击一次增加的结果是3</Paragraph>
      <FunctionComponent/>

      <Title level={3}>setState有时同步，有时异步</Title>
      <Paragraph>点击实例1（将其重置为0）中的一次增加按钮，打开控制台，发现在每次setState下面打印的num都是0</Paragraph>
      <Paragraph>点击实例2（将其重置为0）中的一次增加按钮，打开控制台，发现在每次setState下面打印的num是0,0,0,4,6,9</Paragraph>
      <Paragraph>点击实例3（将其重置为0）中的一次增加按钮，打开控制台，发现在每次setState下面打印的num都是0</Paragraph>
    </Typography>
  );
}

export default Chapter2_2
