import React from 'react';

import { Button, Typography } from "antd";
import { useState } from "react";

const { Title, Text, Paragraph } = Typography

const Chapter1_2 = () => {

  return (
    <Typography>
      <Title level={2}>react-hook的发展历史</Title>
      <Paragraph>
        React 团队从一开始就很注重 React 的代码复用性。
        他们对代码复用性的解决方案历经：Mixin, HOC, Render Prop，直到现在的 Custom Hook。
        所以 Custom Hook 并不是一拍脑门横空出世的产物。
      </Paragraph>
      <Paragraph>
        关于React-Hook发展历史的详细叙述，请<a href="https://www.notion.so/winddancer/React-542948adaff64eb4aed24a2f813e60c1" target="_blank" rel="noreferrer">点击此处</a>
      </Paragraph>
    </Typography>
  );
}

export default Chapter1_2