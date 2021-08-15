/*
 * @Descripttion: reducer
 * @Author: huangjitao
 * @Date: 2021-08-15 19:00:27
 * @Function: 该文件用途描述
 */

export type State = {
  loading: boolean; // 加载状态
  dataSource: any[]
}

export type Action = {
  data?: any[];
  type: 'START' | 'SUCCESS';
}

export const fetchDataReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
      }
    case 'SUCCESS':
      return {
        loading: false,
        dataSource: action.data
      };
    default:
      return state
  }
}

export const getDataSource = () => {
  return (dispatch: React.Dispatch<Action>) => {
    setTimeout(() => {
      dispatch({
        type: 'SUCCESS',
        data: [
          {key: 1, name: '小明', age: Math.ceil(Math.random()* 30), gender: 'male'},
          {key: 2, name: '小花', age: Math.ceil(Math.random()* 30), gender: 'female'},
          {key: 3, name: '小张', age: Math.ceil(Math.random()* 30), gender: 'male'},
          {key: 4, name: '小李', age: Math.ceil(Math.random()* 30), gender: 'female'},
        ]
      })
    }, 1000);
  }
}