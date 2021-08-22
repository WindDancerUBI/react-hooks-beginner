/*
 * @Descripttion: useImperativeHandle的作用
 * @Author: huangjitao
 * @Date: 2021-08-22 16:44:25
 * @Function: 该文件用途描述
 */


import { Button, Divider, Select, Typography } from "antd";
import React, { useRef }  from "react";
import MultipleTag from "./MultipleTag";
const { Title, Paragraph } = Typography;

const dataSource = [
  { label: "小花", value: 1 },
  { label: "小明", value: 2 },
  { label: "小张", value: 3 },
  { label: "老王", value: 4 }
]

function Chapter8_2() {
  const ref = useRef<any>()

  // 添加标签
  const addTag = (value: number, options: any) => {
    const val = { label: options.label, id: options.value }
    ref.current.addTag([val])
  }

  // 重置标签
  const setTag = () => {
    ref.current.setTag([{ label: "小花", id: 1 }])
  }

  return (
    <Typography>
      <Title level={2}>useImperativeHandle的作用</Title>
      <Paragraph>
        useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。这样大大增加了父组件获取子组件下状态和方法的便捷性。
      </Paragraph>
      <Title level={3}>案例</Title>
      <Paragraph>
        自定义一个组件MultipleTag，该组件将用来展示过个标签，并且支持添加、删除、重置标签；
        其中删除标签的逻辑可在组件内部自行解决；
        而添加、重置标签涉及到在父组件中调用添加、删除的方法。因此可以使用useImperativeHandle将这两个方法暴露给父组件。
      </Paragraph>
      <Select options={dataSource} onChange={addTag} placeholder="请选择要添加的标签" style={{width: 200}}/>
      <Button onClick={setTag} style={{marginLeft: 15}}>重置</Button>
      <Divider />
      <MultipleTag initialValue={[{ label: "小花", id: 1 }]} ref={ref}/>
    </Typography>
  );
}

export default Chapter8_2;