/*
 * @Descripttion: useEffct的依赖项问题
 * @Author: huangjitao
 * @Date: 2021-08-14 10:34:51
 * @Function: 探究依赖项的意义
 */

import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
const { Title, Text, Paragraph } = Typography;

function Chapter3_3() {
  const [num, setNum] = useState<number>(0);

  const addNum = () => {
    setNum(num + 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('num:', num)
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Typography>
      <Title level={2}>useEffectde的依赖项问题</Title>
      <Title level={3}>useEffectde的依赖项的意义是什么？</Title>
      <Paragraph>
        使用上一节的定时器例子，这次不适用依赖项，该定时器将定时打印num的值。
        结果发现，打印的num值一直是0（符合预期）；
        但是当点击增加按钮修改num的值后，打印的num值仍然是0。
      </Paragraph>
      <p>数字：{num}</p>
      <Button onClick={addNum}>增加</Button>
      <Title level={3}>React-hooks与闭包</Title>
      <Paragraph>
        这是因为React-hooks严重依赖闭包，有关闭包的知识可参考文档中对应章节的内容。
      </Paragraph>
      <Paragraph>
        React正是依赖了闭包的特性，因此调用多个useState时，它们之间的状态值互不影响；但也正是因为闭包的特性，导致useEffect中使用了过期的状态值。
        因此依赖项的作用就是：在依赖项改变时，重新创建一个新的hook，并在创建的过程中拿到最新的值。
        如果使用了eslint的话，vscode会在依赖项里提示你将在useEffect中用到的变量添加进依赖项中。
      </Paragraph>
    </Typography>
  );
}

export default Chapter3_3;
