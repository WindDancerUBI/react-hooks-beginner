/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-08-26 17:08:22
 * @Function: use of this file
 */
import { Button } from 'antd';
import React from 'react';

const Child = React.memo((props: {addNum: () => void}) => {
  const { addNum } = props

  console.log('子组件重新渲染了')

  return (
    <div style={{ padding: 10, border: '1px solid #000' }}>
      <h2>子组件</h2>
      <Button onClick={addNum}>增加</Button>
    </div>
  );
})

export default Child;