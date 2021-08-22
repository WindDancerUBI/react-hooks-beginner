/*
 * @Descripttion: useRef的特性
 * @Author: huangjitao
 * @Date: 2021-08-22 11:47:30
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import React, { useRef, useState } from "react";
const { Title, Paragraph } = Typography;

function Chapter7_2() {
  const ref = useRef<number>(0)
  const add = () => {
    ref.current = ref.current + 1
    console.log('ref', ref)
  }
  
  const [refresh, setRefresh] = useState<boolean>(false)

  const refreshPage = () => {
    setRefresh(!refresh)
  }

  return (
    <Typography>
      <Title level={2}>useRef的特性</Title>
      <Paragraph>
        useRef保存的值存储在ref.current中，通过给ref.current赋值可以改变useRef保存的值。
        但是需要注意的是，ref.current的赋值操作不会导致页面的重新渲染，这也是useRef区别于useState的地方
      </Paragraph>
      <Title level={2}>useRef的特性</Title>
      <Paragraph>
        下面一个例子使用ref存储数字，点击增加按钮使ref存储的数字加1；
        但是每次点击增加按钮，数字并没有改变；
        点击刷新按钮，更改了状态值refresh后，页面重新渲染，这时候显示的数字才是预期的。
      </Paragraph>
      <p>数字：{ref.current}</p>
      <Button onClick={add} style={{marginRight: 15}}>增加</Button>
      <Button onClick={refreshPage}>刷新</Button>
    </Typography>
  );
}

export default Chapter7_2;