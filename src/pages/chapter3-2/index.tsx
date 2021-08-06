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
      console.log("num + 1");
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
      <p>数字：{num}</p>
    </Typography>
  );
}

export default Chapter3_2;
