/*
 * @Descripttion: 何时使用useLayoutEffect
 * @Author: huangjitao
 * @Date: 2021-08-15 11:38:18
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
const { Title, Text, Paragraph } = Typography;

function Chapter4_2() {

  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(`useEffect - count=${num}`)
    // 耗时的操作
    const pre = Date.now();
    while(Date.now() - pre < 1000) {}
    
    // num为0时重新生成个随机数
    if (num === 0) {    
        setNum(10 + Math.random() * 200);
    }
  }, [num]);
  
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(`useLayoutEffect - count=${count}`)
    // 耗时的操作
    const pre = Date.now();
    while(Date.now() - pre < 1000) {}

    if (count === 0) {    
        setCount(10 + Math.random() * 200);
    }
  }, [count]);
  

  return (
    <Typography>
      <Title level={2}>useLayoutEffect与useEffect的区别</Title>
      <Paragraph>
        点击按钮重置状态值num为0，num为0时，在1000ms后状态值num随机变为一个非0的值。使用useEffect处理该副作用，发现有一个明显的num从0 到 随机值的过程。
      </Paragraph>
      <Title level={3}>实例1：使用useEffect</Title>
      <p>数字num：{num}</p>
      <Button onClick={() => setNum(0)}>重置</Button>
      <Paragraph>
        该用useLayoutEffect处理该副作用，发现点击重置后直接显示了新的随机值，变0的这个过程没有在页面上显示出来。
      </Paragraph>
      <Title level={3}>实例2：使用useLayoutEffect</Title>
      <p>数字count：{count}</p>
      <Button onClick={() => setCount(0)}>重置</Button>
    </Typography>
  );
}

export default Chapter4_2;
