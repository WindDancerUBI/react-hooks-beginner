/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-08-05 19:36:19
 * @Function: 该文件用途描述
 */

import { Typography } from "antd";

const { Title, Text, Paragraph } = Typography

const Chapter1_1 = () => {

  return (
    <Typography>
      <Title level={2}>react是基本的页面渲染库，基于不同的平台有</Title>
      <ul>
        <li>react-dom: 浏览器</li>
        <li>react-native: app环境</li>
        <li>react-vr: vr平台</li>
      </ul>

      <Title level={2}>为什么要使用React-Hook</Title>
      <ul>
        <li>解决class组件存在的一些弊病：相关的逻辑分散在不同的生命周期里；高阶组件的嵌套地狱</li>
        <li>复用代码逻辑。将一些复杂的逻辑封装起来，可供不同组件调用，减少代码量（拒绝cv）</li>
      </ul>
    </Typography>
  );
}

export default Chapter1_1
