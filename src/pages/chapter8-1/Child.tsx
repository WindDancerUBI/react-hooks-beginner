/*
 * @Descripttion: chapter8-1的子组件
 * @Author: huangjitao
 * @Date: 2021-08-22 15:51:31
 * @Function: 该文件用途描述
 */

import { Input } from "antd";
import React from "react";

const Child = React.forwardRef((props, ref: any) => {

  return (
    <div style={{ padding: 10, border: '1px solid #000' }}>
      <h2>子组件</h2>
      <Input ref={ref} />
    </div>
  );
})

export default Child;
