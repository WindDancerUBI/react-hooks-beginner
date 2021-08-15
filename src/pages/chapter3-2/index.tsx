/*
 * @Descripttion: useEffect清除effect
 * @Author: huangjitao
 * @Date: 2021-08-06 17:36:57
 * @Function: use of this file
 */
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
const { Title, Text, Paragraph } = Typography;

function Chapter3_2() {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum(num + 1);
    }, 2000);
    console.log("effect部分");
    return () => {
      clearInterval(timer);
      console.log("return部分");
    };
  }, [num]);
  return (
    <Typography>
      <Title level={2}>useEffect如何清除effect</Title>
      <Paragraph>
        <ul>
          <li>React会在第一次渲染时执行useEffect中的函数，是不会执行return。</li>
          <li>effect 在之后的每次渲染的时候都会执行。此时先执行return函数，再执行effect中的副作用。</li>
          <li>React 会在组件卸载的时候执行清除操作（即执行return）</li>
        </ul>
      </Paragraph>
      <Title level={3}>实例</Title>
      <Paragraph>
        在控制台发现刚加载时，打印的是"effect部分"（即只执行的副作用部分）；
        之后每次先打印"return部分"，在打印"effect部分"(即先执行清除部分，在执行副作用部分)；
        当点击其它页面时（即该组件卸载时），只打印了"return部分"（即只执行了清除部分）。
        整个过程保证了只有一个定时器。
      </Paragraph>
      <p>数字：{num}</p>
    </Typography>
  );
}

export default Chapter3_2;
