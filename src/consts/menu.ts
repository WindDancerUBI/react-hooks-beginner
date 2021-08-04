/*
 * @Descripttion: 菜单配置
 * @Author: huangjitao
 * @Date: 2021-08-04 20:56:55
 * @Function: 该文件用途描述
 */

export const menu = [
  {
    label: "1. React基本简介",
    key: "1",
    children: [
      {
        label: "1.1 React的特点",
        key: "1-1",
        path: "/abstract/feature",
        component: null
      },
      {
        label: "1.2 React-Hook的历史",
        key: "1-2",
        path: "/abstract/history",
        component: null
      }
    ]
  },
  {
    label: "2. useState",
    key: "2",
    children: [
      {
        label: "2.1 useState的基本用法",
        key: "2-1",
        path: "/useState/base",
        component: null
      },
      {
        label: "2.2 setState是同步还是异步",
        key: "2-2",
        path: "/useState/sync",
        component: null
      },
      {
        label: "2.3 useState的函数式更新",
        key: "2-3",
        path: "/useState/func-update",
        component: null
      }
    ]
  }
]