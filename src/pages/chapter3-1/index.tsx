/*
 * @Descripttion: useEffect的基本用法
 * @Author: huangjitao
 * @Date: 2021-08-06 11:23:34
 * @Function: use of this file
 */

import { Button, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title, Text, Paragraph } = Typography;

const Chapter3_1 = () => {
  const [num, setNum] = useState<number>(0);
  const [doubleNum, setDoubleNum] = useState<number>(0);

  useEffect(() => {
    console.log("页面渲染完毕");
    setDoubleNum(num * 2);
  }, [num]);

  return (
    <Typography>
      <Title level={2}>useEffect的基本用法</Title>
      <Text code>
        {`useEffect(() => {
          // do some effect function
        }, [dependence]);`}
      </Text>
      <Title level={3}>实例</Title>
      <Paragraph>
        useEffect在页面渲染完成后执行。在本例中点击按钮使状态值num改变，页面重新渲染，接着执行useEffect，将状态值doubleNum更新为num的两倍
      </Paragraph>
      <p>num: {num}</p>
      <p>doubleNum: {doubleNum}</p>
      <Button onClick={() => setNum(num + 1)} className="bnt-margin">
        增加num
      </Button>
      <Paragraph>
        <ul>
          <li>当没有依赖项，会在组件每次更新后执行</li>
          <li>依赖项为空数组：会在组件挂载和卸载时执行</li>
          <li>依赖项为变量时，会在这些变量改变后才执行</li>
        </ul>
      </Paragraph>
    </Typography>
  );
};

export default Chapter3_1;
