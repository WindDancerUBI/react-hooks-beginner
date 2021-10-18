/*
 * @Title: useArray custom hook
 * @Author: huangjitao
 * @Date: 2021-10-18 16:00:30
 * @Description: 自定义一个hook，实现对数组一系列操作的封装
 */
import { useCallback, useState } from 'react';

const useArray = <T>(val: T[]) => {
  const [value, setValue] = useState(val);

  // 清空列表
  const clear = useCallback(() => {
    setValue([]);
  }, [])

  // 移除列表特定位置元素
  const removeIndex = useCallback((index: number) => {
    setValue(state => {
      const temp = [...state]
      temp.splice(index, 1);
      return temp
    });
  }, [])

  // 添加元素
  const add = useCallback((thing: T) => {
    setValue(state => {
      const temp = [...state]
      temp.push(thing)
      return temp
    });
  }, [])
  return {
    value,
    clear,
    removeIndex,
    add,
  };
};

export default useArray;
