/*
 * @Descripttion: 子组件1
 * @Author: huangjitao
 * @Date: 2021-08-15 15:51:52
 * @Function: Chapter5_1的子组件
 */

import React, { useContext } from "react";
import { Context } from "./index";

function ChildOne() {
  const context = useContext(Context)

  return (
    <div style={{ padding: 10, border: '1px solid #000' }}>
      <h2>子组件1</h2>
      <p>该子组件用来显示num值</p>
      <p>数字num：{context.num}</p>
    </div>
  );
}

export default ChildOne;