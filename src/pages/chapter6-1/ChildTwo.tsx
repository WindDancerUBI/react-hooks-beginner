/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-08-15 15:52:01
 * @Function: 该文件用途描述
 */

import { Button } from "antd";
import React, { useContext } from "react";
import { Context } from "./index";

function ChildTwo() {
  const context = useContext(Context)

  const clickHandle = () => {
    context.setNum(context.num + 1)
  }

  return (
    <div style={{ padding: 10, border: '1px solid #000' }}>
      <h2>子组件2</h2>
      <p>该子组件用来修改num值</p>
      <Button onClick={clickHandle}>增加</Button>
    </div>
  );
}

export default ChildTwo;