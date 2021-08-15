/*
 * @Descripttion: useEffect依赖项的选择
 * @Author: huangjitao
 * @Date: 2021-08-14 11:24:06
 * @Function: 正确选择依赖项
 */

import { Button, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
const { Title, Text, Paragraph } = Typography;

function Chapter3_4() {
  const [refresh, setRefresh] = useState<boolean>(false)
  const [dataSource, setDataSource] = useState<any>([]);
  const [otherObject, setOtherObject] = useState<{[key: string]: any}>({})

  const constValue = 1
  const object = {}

  useEffect(() => {
    console.log("页面重新渲染了")
    setDataSource([
      {key: 1, name: '小明', age: Math.ceil(Math.random()* 30), gender: 'male'},
      {key: 2, name: '小花', age: Math.ceil(Math.random()* 30), gender: 'female'},
      {key: 3, name: '小张', age: Math.ceil(Math.random()* 30), gender: 'male'},
      {key: 4, name: '小李', age: Math.ceil(Math.random()* 30), gender: 'female'},
    ])
  }, [refresh])

  return (
    <Typography>
      <Title level={2}>useEffectdet依赖项的选择</Title>
      <Title level={3}>实例</Title>
      <Button onClick={() => setRefresh(!refresh)}>刷新数据</Button>
      <Table dataSource={dataSource}>
        <Table.Column dataIndex="name" title="姓名"/>
        <Table.Column dataIndex="age" title="年龄"/>
        <Table.Column dataIndex="gender" title="性别"/>
      </Table>
      <Paragraph>分别改变useEffcet中的依赖项看看会发生什么：
        <ul>
          <li>使用普通常量（constValue）作为依赖项，页面只会渲染一次</li>
          <li>使用普通对象（object)作为依赖项，页面无限渲染</li>
          <li>使用普通状态值（refresh），在状态值改变时页面重新渲染</li>
          <li>使用对象状态值（otherObject），页面只会渲染一次</li>
          <li>使用对象状态值（dataSource）并且在useEffect中改变了该对象状态值，页面无限渲染</li>
        </ul>
      </Paragraph>
    </Typography>
  );
}

export default Chapter3_4;
