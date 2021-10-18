/*
 * @Title: your project
 * @Author: huangjitao
 * @Date: 2021-10-18 17:25:59
 * @Description: description of this file
 */

import { useCallback, useState } from "react";

const useQuery = () => {
  const [dataList, setDataList] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false)

  // 请求数据
  const mutate = useCallback(() => {
    // 模拟数据请求
    setLoading(true)
    setTimeout(() => {
      setDataList([
        {key: 1, name: '小明', age: Math.ceil(Math.random()* 30), gender: 'male'},
        {key: 2, name: '小花', age: Math.ceil(Math.random()* 30), gender: 'female'},
        {key: 3, name: '小张', age: Math.ceil(Math.random()* 30), gender: 'male'},
        {key: 4, name: '小李', age: Math.ceil(Math.random()* 30), gender: 'female'},
      ])
      setLoading(false)
    }, 1000);
  }, [])

  // 清除数据
  const clear = useCallback(() => {
    setDataList([])
  }, [])

  return {
    dataList,
    loading,
    mutate,
    clear
  }
};

export default useQuery;