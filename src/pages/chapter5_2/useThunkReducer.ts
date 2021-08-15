/*
 * @Descripttion: 可dispatch异步函数的useReducer
 * @Author: huangjitao
 * @Date: 2021-08-15 19:12:52
 * @Function: 该文件用途描述
 */

import { useReducer } from "react";
import { Action, State } from "./reducer";

const thunkDispatch = (dispatch: React.Dispatch<Action>, getState: () => 
  {
    loading: boolean;
    dataSource: any;
  }
) => {
  return (action: any) => {
    if (typeof action === 'function') {
      action(thunkDispatch(dispatch, getState), getState);
    } else {
      dispatch(action);
    }
  };
};

export const useThunkReducer = (reducer: (state: State, action: Action) => 
  {
    loading: boolean;
    dataSource: any;
  }, 
  defaultState: State
) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const getState = () => state;
  const newDispatch = thunkDispatch(dispatch, getState);
  return [state, newDispatch] as const
};
