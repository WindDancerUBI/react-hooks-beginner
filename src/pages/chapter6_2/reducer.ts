/*
 * @Descripttion: reducer
 * @Author: huangjitao
 * @Date: 2021-08-15 20:11:21
 * @Function: 该文件用途描述
 */

export type State = {
  num: number
}

export type Action = {
  data?: any[];
  type: 'ADD' | 'REDUCE';
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return {
        num: state.num + 1
      }
    case 'REDUCE':
      return {
        num: state.num - 1
      };
    default:
      return state
  }
}