/*
 * @Descripttion: useCalllback的用法
 * @Author: huangjitao
 * @Date: 2021-08-26 16:29:53
 * @Function: use of this file
 */
import React, { useCallback, useState } from 'react';
import { Button, Typography } from "antd";
import Child from './Child';

const { Title, Paragraph } = Typography

function Chapter10_1() {
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
      <Title level={2}>useCallback的使用</Title>
      <Paragraph>
        把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。
      </Paragraph>
      <Title level={3}>案例</Title>
      <div style={{ padding: 10, border: '1px solid #000' }}>
        <h2>父组件</h2>
        <Paragraph>
          定义一个状态变量num，并定义一个方法addNum可以增加状态值；
          将该方法addNum传递给子组件，并在子组件中监视该方法是否重新定义；
        </Paragraph>
        <p>数字num: {num}</p>
        <Button onClick={() => setRefresh(!refresh)}>刷新</Button>
        <Child addNum={addNum}/>
      </div>
    </Typography>
  );
}

export default Chapter10_1;
