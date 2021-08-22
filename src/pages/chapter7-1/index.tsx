/*
 * @Descripttion: useRef的作用
 * @Author: huangjitao
 * @Date: 2021-08-22 11:08:38
 * @Function: 该文件用途描述
 */

import { Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
const { Title, Paragraph } = Typography;

function Chapter7_1() {
  const [num_1, setNum_1] = useState<number>(0);
  let timer_1: any
  useEffect(() => {
    timer_1 = setInterval(() => {
      setNum_1(num => num + 1)
    }, 500)
  }, [])
  useEffect(() => {
    if (num_1 > 10) {
      console.log(timer_1)
      clearInterval(timer_1)
    }
  }, [num_1])

  const [num_2, setNum_2] = useState<number>(0);
  const ref = useRef<any>()
  useEffect(() => {
    ref.current = setInterval(() => {
      setNum_2(num => num + 1)
    }, 500)
  }, [])
  useEffect(() => {
    if (num_2 > 10) {
      console.log(ref.current)
      clearInterval(ref.current)
    }
  }, [num_2])

  return (
    <Typography>
      <Title level={2}>useRef的作用</Title>
      <Paragraph>
        useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
        返回的 ref 对象在组件的整个生命周期内持续存在。
        这个特性通过以下两个实例可以清楚地加以说明
      </Paragraph>

      <Title level={3}>实例1: 使用普通变量存储定时器</Title>
      <Paragraph>
        在页面第一次加载完毕后，设置一个定时器，该定时器的作用是定期更改num_1的值；
        将该定时器的id赋值给在外层定义的普通变量timer_1来保存；
        在num_1大于10的时候，将timer_1中保存的定时器id取出并清除。
        结果并没有达到预期效果。
      </Paragraph>
      <p>数字1：{num_1}</p>

      <Title level={3}>实例2: 使用useRef存储定时器</Title>
      <Paragraph>
        重复上面的例子，只是这次使用useRef定义的ref来存储定时器id。
        结果达到了预期的效果
      </Paragraph>
      <p>数字2：{num_2}</p>
    </Typography>
  );
}

export default Chapter7_1;
