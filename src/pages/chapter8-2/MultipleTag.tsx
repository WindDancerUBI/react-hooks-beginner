/*
 * @Descripttion: 自定义多Tag显示组件
 * @Author: huangjitao
 * @Date: 2021-08-22 16:57:35
 * @Function: 该文件用途描述
 */

import React, { forwardRef, useImperativeHandle, useState } from "react"; 
import { Tag } from "antd";

type Value = { id: any; label: string }[];
interface MultipleTagProps {
  initialValue?: Value; // 初始值
  onChange?: (value: Value) => void;
}

const MultipleTag = forwardRef((props: MultipleTagProps, ref) => {
  const { initialValue, onChange } = props;
  const [array, setArray] = useState<Value>(initialValue || []);

  // 删除标签
  const deleteTag = (id: any) => {
    const newArray = array.filter((item) => item.id !== id);
    setArray(newArray);
    onChange?.(newArray);
  };

  // 添加标签
  const addTag = (params: Value) => {
    const tmp = [...array];
    params.forEach((item) => {
      const isExit = tmp.find((thing) => thing.id === item.id);
      if (!isExit) {
        tmp.push(item);
      }
    });
    setArray(tmp);
    onChange?.(tmp);
  };

  // 设置标签
  const setTag = (params: Value) => {
    setArray(params);
    onChange?.(params);
  };

  // 使用 ref 时自定义暴露给父组件的实例值。
  useImperativeHandle(ref, () => ({
    value: array,
    addTag: (params: Value) => {
      addTag(params);
    },
    setTag: (params: Value) => {
      setTag(params);
    }
  }));

  return (
    <div style={{ width: 300, border: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 40 }} >
        {array.map((item) => (
          <Tag
            closable
            key={item.id}
            onClose={() => deleteTag(item.id)}
          >
            {item.label}
          </Tag>
        ))}
    </div>
  );
});

export default MultipleTag;
