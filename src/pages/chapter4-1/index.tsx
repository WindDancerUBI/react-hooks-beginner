/*
 * @Descripttion: useLayoutEffect与useEffect的区别
 * @Author: huangjitao
 * @Date: 2021-08-15 10:25:35
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
const { Title, Text, Paragraph } = Typography;

function Chapter4_1() {
  const [num, setNum] = useState<number>(0)

  useEffect(() => {
    console.log('执行第一个effect')
  }, [num])
  
  useEffect(() => {
    console.log('执行第二个effect')
  }, [num])

  useLayoutEffect(() => {
    console.log('执行layout-effect')
  }, [num])

  const clickHandle = () => {
    setNum(num + 1)
  }

  return (
    <Typography>
      <Title level={2}>useLayoutEffect与useEffect的区别</Title>
      <Paragraph>
        点击增加按钮，改变状态值num。在控制台中发现：useLayout总是比useEffect先执行。
      </Paragraph>
      <Title level={3}>实例</Title>
      <p>数字：{num}</p>
      <Button onClick={clickHandle}>增加</Button>
      <Paragraph>
        通过比较得到：useLayoutEffect是在DOM更新后同步执行，useEffect是在页面重新绘制后执行
      </Paragraph>
    </Typography>
  );
}

export default Chapter4_1;
