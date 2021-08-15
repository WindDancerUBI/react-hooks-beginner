/*
 * @Descripttion: useContext配合useReducer实现redux效果
 * @Author: huangjitao
 * @Date: 2021-08-15 20:02:51
 * @Function: 该文件用途描述
 */

import { Typography } from "antd";
import React, { createContext, useReducer, useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { reducer } from "./reducer";
const { Title, Paragraph } = Typography;

export const Context = createContext<{
  state: { num: number };
  dispatch: React.Dispatch<React.SetStateAction<any>>;
}>({ state: {num: 0}, dispatch: () => {} })

function Chapter6_2() {
  const [state, dispatch] = useReducer(reducer, { num: 0 });

  return (
    <Typography>
      <Title level={2}>useContext配合useReducer实现redux效果</Title>
      <Paragraph>
        useContext的作用是将该组件的状态值在所有其子组件之间实现共享。
        以下的例子将实现将状态值和更新该状态的函数在所有子组件之间共享，已达到所以子组件可以显示同一个状态值并且可以更改该状态值。
      </Paragraph>
      <Title level={3}>实例</Title>
      <Context.Provider value={{state, dispatch}} >
        <div style={{ padding: 10, border: '1px solid #000' }}>
          <h1>父组件</h1>
          <p>数字num：{state.num}</p>
          <ChildOne />
          <ChildTwo />
        </div>
      </Context.Provider>  
    </Typography>
  );
}

export default Chapter6_2;
