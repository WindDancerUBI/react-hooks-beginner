/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-08-26 17:07:01
 * @Function: use of this file
 */
import React, { useCallback, useState } from 'react';
import { Button, Typography } from "antd";
import Child from './Child';

const { Title, Paragraph } = Typography

function Chapter10_2() {
  const [num, setNum] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(false)

  // const addNum = () => {
  //   setNum(num => num + 1)
  // }

  const addNum = useCallback(() => {
    setNum(num => num + 1)
  }, [])
  
  return (
    <Typography>
      <Title level={2}>useCallback的优化</Title>
      <Paragraph>
        当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate, React.memo）的子组件时，使用useCallback将非常有用。
      </Paragraph>
      <Title level={3}>案例</Title>
      <div style={{ padding: 10, border: '1px solid #000' }}>
        <h2>父组件</h2>
        <Paragraph>
          将函数传递给经过React.memo优化过的子组件时，
          如果传递的是普通函数，则每次父组件的重新渲染，都将导致该函数重新定义。此时React.memo的引用地址比较失去意义，子组件仍将跟着父组件一起重新渲染；
          如果将该函数经过useCallback优化，则传递的该函数并不会在每次父组件重新渲染时重定义。因此React.memo就会起到作用，避免子组件不必要的渲染。
        </Paragraph>
        <p>数字num: {num}</p>
        <Button onClick={() => setRefresh(!refresh)}>刷新</Button>
        <Child addNum={addNum}/>
      </div>
    </Typography>
  );
}

export default Chapter10_2;