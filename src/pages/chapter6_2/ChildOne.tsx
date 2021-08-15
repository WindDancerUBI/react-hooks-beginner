/*
 * @Descripttion: 子组件1
 * @Author: huangjitao
 * @Date: 2021-08-15 20:07:26
 * @Function: 6-2节的子组件
 */

import { Button } from "antd";
import React, { useContext } from "react";
import { Context } from "./index";

function ChildOne() {
  const context = useContext(Context)

  const addNum = () => {
    context.dispatch({
      type: 'ADD',
    })
  }

  return (
    <div style={{ padding: 10, border: '1px solid #000' }}>
      <h2>子组件1</h2>
      <p>数字num：{context.state.num}</p>
      <Button onClick={addNum}>增加</Button>
    </div>
  );
}

export default ChildOne;