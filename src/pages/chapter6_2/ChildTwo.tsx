/*
 * @Descripttion: 子组件2
 * @Author: huangjitao
 * @Date: 2021-08-15 20:16:44
 * @Function: 6-2节的子组件
 */

import { Button } from "antd";
import React, { useContext } from "react";
import { Context } from "./index";

function ChildTwo() {
  const context = useContext(Context)

  const reduceNum = () => {
    context.dispatch({
      type: 'REDUCE',
    })
  }

  return (
    <div style={{ padding: 10, border: '1px solid #000' }}>
      <h2>子组件2</h2>
      <p>数字num：{context.state.num}</p>
      <Button onClick={reduceNum}>减少</Button>
    </div>
  );
}

export default ChildTwo;