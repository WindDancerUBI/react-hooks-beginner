/*
 * @Descripttion: useState的惰性初始化
 * @Author: huangjitao
 * @Date: 2021-08-06 06:49:32
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import { useState } from "react";
import FunctionState from "./FunctionState";


const { Title, Text, Paragraph } = Typography

const Chapter2_4 = () => {
  const [callback, setCallback] = useState(() => { alert("init"); });

  return (
    <Typography>
      <Title level={2}>useState惰性初始化</Title>
      <Paragraph>
        给useState初始化传入一个函数，<Text code>{"const [callback, setCallback] = useState(() => { alert('init') })"}</Text>
        预期：先存储函数，在调用该函数的时候才会去执行。结果发现刚打开页面，就直接执行了这个函数。
      </Paragraph>
      <Button className="bnt-margin" onClick={() => { setCallback(() => { alert("change"); }); }} > 更改函数 </Button>
      {/* <Button onClick={callback}>执行函数</Button> */}
      <FunctionState />
    </Typography>
  );

}

export default Chapter2_4