/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-08-26 16:40:37
 * @Function: use of this file
 */
import { Button } from 'antd';
import React, { useEffect } from 'react';

function Child(props: {addNum: () => void}) {
  const { addNum } = props

  useEffect(() => {
    console.log('函数重新定义了')
  }, [addNum])

  return (
    <div style={{ padding: 10, border: '1px solid #000' }}>
      <h2>子组件</h2>
      <Button onClick={addNum}>增加</Button>
    </div>
  );
}

export default Child;
