/*
 * @Title: custom hook的使用场景
 * @Author: huangjitao
 * @Date: 2021-10-18 16:42:01
 * @Description: 将请求操作的一系列重复代码进行封装，拒绝复制粘贴重复代码的行为。
 */
import { Tabs, Typography } from 'antd';
import React from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const { Title, Paragraph } = Typography
const { TabPane } = Tabs;

function Chapter11_2() {
  return (
    <Typography>
      <Title level={2}>custom hook的使用场景</Title>
      <Paragraph>
        自定义hook通常用于将重复的代码逻辑进行封装，这样在多个组件处使用相同逻辑时，直接调用hook获取相关的状态数据和方法，从而大大减少代码量；
        在这个实例中，多个组件（页面）使用到了相同的请求和相关操作，因此可以将则部分代码封装成hook
      </Paragraph>
      <Title level={2}>实例2：useQuery hook</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="页面1" key="1">
          <PageOne />
        </TabPane>
        <TabPane tab="页面2" key="2">
          <PageTwo/>
        </TabPane>
      </Tabs>
    </Typography>
  );
}

export default Chapter11_2;
