/*
 * @Descripttion: 菜单配置
 * @Author: huangjitao
 * @Date: 2021-08-04 20:56:55
 * @Function: 该文件用途描述
 */

import Chapter10_1 from "../pages/chapter10-1";
import Chapter10_2 from "../pages/chapter10-2";
import Chapter2_1 from "../pages/chapter2-1";
import Chapter2_2 from "../pages/chapter2-2";
import Chapter2_3 from "../pages/chapter2-3";
import Chapter2_4 from "../pages/chapter2-4";
import Chapter3_1 from "../pages/chapter3-1";
import Chapter3_2 from "../pages/chapter3-2";
import Chapter3_3 from "../pages/chapter3-3";
import Chapter3_4 from "../pages/chapter3-4";
import Chapter4_1 from "../pages/chapter4-1";
import Chapter4_2 from "../pages/chapter4-2";
import Chapter5_1 from "../pages/chapter5_1";
import Chapter5_2 from "../pages/chapter5_2";
import Chapter6_1 from "../pages/chapter6-1";
import Chapter6_2 from "../pages/chapter6_2";
import Chapter7_1 from "../pages/chapter7-1";
import Chapter7_2 from "../pages/chapter7-2";
import Chapter8_1 from "../pages/chapter8-1";
import Chapter8_2 from "../pages/chapter8-2";
import Chapter9_1 from "../pages/chapter9-1";

export const menu = [
  {
    label: "1. React基本简介",
    key: "1",
    children: [
      {
        label: "1.1 React的特点",
        key: "1-1",
        path: "/abstract/feature",
        component: 'a'
      },
      {
        label: "1.2 React-Hook的历史",
        key: "1-2",
        path: "/abstract/history",
        component: 'a'
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
        component: Chapter2_1
      },
      {
        label: "2.2 setState是同步还是异步",
        key: "2-2",
        path: "/useState/sync",
        component: Chapter2_2
      },
      {
        label: "2.3 useState的函数式更新",
        key: "2-3",
        path: "/useState/func-update",
        component: Chapter2_3
      },
      {
        label: "2.4 useState的惰性初始化",
        key: "2-4",
        path: "/useState/lazy",
        component: Chapter2_4
      }
    ]
  },
  {
    label: "3. useEffect",
    key: "3",
    children: [
      {
        label: "3.1 useEffect的基本用法",
        key: "3-1",
        path: "/useEffect/base",
        component: Chapter3_1
      },
      {
        label: "3.2 useEffect如何清除effect",
        key: "3-2",
        path: "/useEffect/clearEffect",
        component: Chapter3_2
      },
      {
        label: "3.3 useEffect的依赖项问题",
        key: "3-3",
        path: "/useEffect/dependencies",
        component: Chapter3_3
      },
      {
        label: "3.4 useEffect依赖项的选择",
        key: "3-4",
        path: "/useEffect/chooseDependencies",
        component: Chapter3_4
      }
    ]
  },
  {
    label: "4. useLayoutEffect",
    key: "4",
    children: [
      {
        label: "4.1 useLayoutEffect与useEffect的区别",
        key: "4-1",
        path: "/useLayoutEffect/differences",
        component: Chapter4_1
      },
      {
        label: "4.2 useLayoutEffect使用场景",
        key: "4-2",
        path: "/useLayoutEffect/whenToUse",
        component: Chapter4_2
      },
    ]
  },
  {
    label: "5. useReducer",
    key: "5",
    children: [
      {
        label: "5-1 useReducer的使用",
        key: "5-1",
        path: "/useReducer/use",
        component: Chapter5_1
      },
      {
        label: "5-2 useReducer如何dispatch函数",
        key: "5-2",
        path: "/useReducer/thunk",
        component: Chapter5_2
      },
    ]
  },
  {
    label: "6. useContext",
    key: "6",
    children: [
      {
        label: "6-1 useContext的使用",
        key: "6-1",
        path: "/useContext/use",
        component: Chapter6_1
      },
      {
        label: "6-2 useContext实现redux",
        key: "6-2",
        path: "/useContext/redux",
        component: Chapter6_2
      },
    ]
  },
  {
    label: "7. useRef",
    key: "7",
    children: [
      {
        label: "7-1 useRef的作用",
        key: "7-1",
        path: "/useRef/use",
        component: Chapter7_1
      },
      {
        label: "7-2 useRef的特性",
        key: "7-2",
        path: "/useRef/feature",
        component: Chapter7_2
      },
    ]
  },
  {
    label: "8. useImperativeHandle",
    key: "8",
    children: [
      {
        label: "8-1 React.forwardRef的使用",
        key: "8-1",
        path: "/useImperativeHandle/forwardRef",
        component: Chapter8_1
      },
      {
        label: "8-2 useImperativeHandle的作用",
        key: "8-2",
        path: "/useImperativeHandle/use",
        component: Chapter8_2
      },
    ]
  },
  {
    label: "9. useMemo",
    key: "9",
    children: [
      {
        label: "9-1 useMemo的使用",
        key: "9-1",
        path: "/useMemo/use",
        component: Chapter9_1
      },
    ]
  },
  {
    label: "10. useCallback",
    key: "10",
    children: [
      {
        label: "10-1 useCallback的作用",
        key: "10-1",
        path: "/useCallback/use",
        component: Chapter10_1
      },
      {
        label: "10-2 useCallback的优化",
        key: "10-2",
        path: "/useCallback/optimize",
        component: Chapter10_2
      },
    ]
  }
]