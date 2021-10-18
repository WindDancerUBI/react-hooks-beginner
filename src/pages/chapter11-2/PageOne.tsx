/*
 * @Title: your project
 * @Author: huangjitao
 * @Date: 2021-10-18 17:47:36
 * @Description: description of this file
 */
import { Button, Table } from 'antd';
import React from 'react';
import useQuery from './useQuery';

function PageOne() {
  const {dataList, loading, mutate, clear} = useQuery()
  return (
    <div>
      <Button onClick={mutate}>获取数据</Button>
      <Button onClick={clear}>清除数据</Button>
      <Table dataSource={dataList} loading={loading}>
        <Table.Column dataIndex="name" title="姓名"/>
        <Table.Column dataIndex="age" title="年龄"/>
        <Table.Column dataIndex="gender" title="性别"/>
      </Table>
    </div>
  );
}

export default PageOne;
