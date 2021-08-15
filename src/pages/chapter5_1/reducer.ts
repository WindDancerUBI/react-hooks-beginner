/*
 * @Descripttion: reducer
 * @Author: huangjitao
 * @Date: 2021-08-15 17:10:22
 * @Function: 该文件用途描述
 */

export type State<T> = {
  past: T[]; // 存放历史值
  present: T; // 当前值
  future: T[]; // 存放undo值，用于取消撤销
}

export type Action<T> = {
  newPresent?: T;
  type: 'UNDO' | 'REDO' | 'SET' | 'RESET';
}

export const undoReducer = <T>(state: State<T>, action: Action<T>) => {
  const { past, present, future } = state;
  const {newPresent} = action
  switch (action.type) {
    case 'UNDO':
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    case 'REDO':
      if (future.length === 0) return state;
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    case 'SET':
      if (newPresent === present) return state;
      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    case 'RESET':
      return {
        past: [],
        present: newPresent,
        future: [],
      };
    default:
      return state
  }
}