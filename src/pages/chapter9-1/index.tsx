/*
 * @Descripttion: useMemo的使用
 * @Author: huangjitao
 * @Date: 2021-08-26 14:47:39
 * @Function: use of this file
 */
import React, { useEffect, useMemo, useState } from 'react';
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography

function Chapter9_1() {
  const [num, setNum] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(false)

  // const multipleNum = () => {
  //   for (let i = 0; i < 999999999; i++) {
  //     const element = i
  //   }
  //   return num * Math.floor(Math.random() * 10 + 1);
  // }

  const multipleNum = useMemo(() => {
    // 模拟耗性能的开销
    for (let i = 0; i < 999999999; i++) {
      const element = i
    }
    return num * Math.floor(Math.random() * 10 + 1);
  }, [num])

  return (
    <Typography>
      <Title level={2}>useMemo的使用</Title>
      <Paragraph>
        useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
      </Paragraph>
      <Title level={3}>案例</Title>
      <Paragraph>
        定义一个状态数字num将它显示在页面上，在定义另一个数字multipleNum为num的随机倍数也将它显示在页面上；
        分别使用两种方法计算multipleNum：普通函数计算和useMemo计算。
        发现普通函数在每次页面渲染时都会计算multipleNum，而useMemo只在依赖项（num）更新时计算multipleNum从而节省了开销。
      </Paragraph>
      <p>数字num: {num}</p>
      {/* <p>多倍数字：{multipleNum()}</p> */}
      <p>多倍数字：{multipleNum}</p>
      <Button onClick={() => setNum(num => num + 1)} style={{ marginRight: 15 }}>增加</Button>
      <Button onClick={() => setRefresh(!refresh)}>刷新</Button>
    </Typography>
  );
}

export default Chapter9_1;
