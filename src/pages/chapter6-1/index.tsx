/*
 * @Descripttion: useContext的使用
 * @Author: huangjitao
 * @Date: 2021-08-15 15:42:03
 * @Function: 该文件用途描述
 */

import { Typography } from "antd";
import React, { createContext, useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
const { Title, Paragraph } = Typography;

export const Context = createContext<{
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}>({ num: 0, setNum: () => {} })

function Chapter6_1() {
  const [num, setNum] = useState(0);

  return (
    <Typography>
      <Title level={2}>useContext的使用</Title>
      <Paragraph>
        useContext的作用是将该组件的状态值在所有其子组件之间实现共享。
        以下的例子将实现将状态值和更新该状态的函数在所有子组件之间共享，已达到所以子组件可以显示同一个状态值并且可以更改该状态值。
      </Paragraph>
      <Title level={3}>实例</Title>
      <Context.Provider value={{num, setNum}} >
        <div style={{ padding: 10, border: '1px solid #000' }}>
          <h1>父组件</h1>
          <p>数字num：{num}</p>
          <ChildOne />
          <ChildTwo />
        </div>
      </Context.Provider>  
    </Typography>
  );
}

export default Chapter6_1;
