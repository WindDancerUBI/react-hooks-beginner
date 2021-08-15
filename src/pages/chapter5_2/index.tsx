/*
 * @Descripttion: useReducer如何dispatch函数
 * @Author: huangjitao
 * @Date: 2021-08-15 18:58:02
 * @Function: 该文件用途描述
 */

import { Button, Table, Typography } from "antd";
import React from "react";
import { fetchDataReducer, getDataSource, State } from "./reducer";
import { useThunkReducer } from "./useThunkReducer";
const { Title, Paragraph } = Typography;

function Chapter5_2() {
  const [state, dispatch] = useThunkReducer(fetchDataReducer, {
    dataSource: [],
    loading: false
  })

  const { loading, dataSource } = state as State

  const clickHandle = () => {
    // 请求开始前，先将加载状态置为true
    dispatch({
      type: 'START',
      dataSource: []
    })
    // 直接将请求接口的函数传给dispatch
    dispatch(getDataSource())
  }

  return (
    <Typography>
      <Title level={2}>useReducer如何dispatch函数</Title>
      <Paragraph>
        reducer要求返回的必须是一个plain object
        但是在开发中，我们要用到的状态大多数都是从后台获取的。但useReducer不能dispatch一个函数。
        当然你可以在接口返回数据后，再dispatch接口数据，但是这样的话，代码耦合度就很高了，不符合React的哲学：组件专注于渲染！
      </Paragraph>
      <Title level={3}>功能描述</Title>
      <Paragraph>
        仿照React-thunk的思想，将useReducer进行在封装，拦截action，判断其类型，如果是函数，则将该函数的返回值当做action。
        这样能实现接口请求的逻辑与数据渲染想解耦！
        在下面的一个例子中，dispatch的就是接口请求函数。
      </Paragraph>
      <Title level={3}>实例</Title>
      <Button onClick={clickHandle} type="primary">刷新</Button>
      <Table dataSource={dataSource} loading={loading}>
        <Table.Column dataIndex="name" title="姓名"/>
        <Table.Column dataIndex="age" title="年龄"/>
        <Table.Column dataIndex="gender" title="性别"/>
      </Table>
    </Typography>
  );
}

export default Chapter5_2;
