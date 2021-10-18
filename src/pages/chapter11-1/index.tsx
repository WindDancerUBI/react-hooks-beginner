/*
 * @Title: 如何写一个自定义hook
 * @Author: huangjitao
 * @Date: 2021-10-18 15:57:53
 * @Description: 展示自定义的useArray hook, 如何对列表进行操作
 */
import { Button, Typography } from 'antd';
import React from 'react';
import useArray from './useArray';

const { Title, Paragraph } = Typography

function Chapter11_1() {
  const persons: { name: string; age: number }[] = [
    { name: "小花", age: 25 },
    { name: "小张", age: 22 }
  ];
  const { value, clear, removeIndex, add } = useArray(persons);

  return (
    <Typography>
      <Title level={2}>如何自定义一个custom hook</Title>
      <Paragraph>
        自定义一个useArray hook，实现了对数组的一系列操作的封装；
        调用它可以在页面上展示列表数据，并对列表数据进行添加、移除、清除的操作
      </Paragraph>
      <Title level={2}>实例1：useArray hook</Title>
      <Button
        style={{ marginRight: "50px" }}
        onClick={() => add({ name: "小明", age: 1 + Math.round(Math.random() * (100 - 1)) })}
      >
        添加
      </Button>
      <Button style={{ marginRight: "50px" }} onClick={() => removeIndex(0)}>
        移除首位
      </Button>
      <Button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        清空
      </Button>
      {value.map((person, index) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red", marginRight: "20px" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </Typography>
  );
}

export default Chapter11_1;
