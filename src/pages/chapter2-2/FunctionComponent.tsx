/*
 * @Descripttion: 函数组件异步setState
 * @Author: huangjitao
 * @Date: 2021-08-05 21:09:49
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import { useState } from "react";

const FunctionComponent = () => {
  const [num, setNum] = useState(0);

  const addNumAsync = () => {
    setNum(num + 1)
    console.log('1', num)
    setNum(num + 2)
    console.log('2', num)
    setNum(num + 3)
    console.log('3', num)
    setTimeout(() => {
      setNum(num + 1)
      console.log('4', num)
      setNum(num + 2)
      console.log('5', num)
      setNum(num + 3)
      console.log('6', num)
    });
  }
  return (
    <div>
      <p>数字：{num}</p>
      <Button onClick={addNumAsync} className="bnt-margin">增加</Button>
      <Button onClick={() => setNum(0)} className="bnt-margin">重置</Button>
    </div>
  );
}

export default FunctionComponent