/*
 * @Descripttion: useReducer的使用
 * @Author: huangjitao
 * @Date: 2021-08-15 16:57:48
 * @Function: 该文件用途描述
 */

import { Button, Typography } from "antd";
import React, { useCallback, useReducer } from "react";
import { State, undoReducer } from "./reducer";
const { Title, Paragraph } = Typography;

function Chapter5_1() {
  const [state, dispatch] = useReducer(undoReducer, {
    past: [],
    present: 0,
    future: [],
  } as State<number>)

  const present = state.present as number;

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  // 撤销
  const undo = useCallback(() => {dispatch({type: 'UNDO'})}, []);

  // 取消撤销
  const redo = useCallback(() => {dispatch({type: 'REDO'})}, []);

  // 指定为特定值
  const set = useCallback((newPresent: number) => {dispatch({type: 'SET', newPresent: newPresent})}, []);

  // 重置为初始值
  const reset = useCallback(() => {dispatch({type: 'RESET', newPresent: 0})}, []);


  return (
    <Typography>
      <Title level={2}>使用useReducer代替useState管理复杂的状态</Title>
      <Title level={3}>功能描述</Title>
      <Paragraph>
        可以对一个数字进行不断地赋值，同时记录下历史值；可以通过undo对当前值进行撤销操作，一步步地回到最初值；
        在进行撤销操作的同时，记录下undo掉的值；
        通过redo可以回到undo之前的值，不断地redo最终可以回到执行所有撤销操作之前的值。
      </Paragraph>
      <Title level={3}>实例</Title>
      <div>当前值：{present}</div>
      <div style={{ marginTop: 30 }}>
        <Button onClick={undo} disabled={!canUndo} style={{ marginRight: 15 }}>
          撤销
        </Button>
        <Button onClick={redo} disabled={!canRedo} style={{ marginRight: 15 }}>
          恢复撤销
        </Button>
        <Button
          onClick={() => {
            set(present + 1);
          }}
          style={{ marginRight: 15 }}
        >
          增加
        </Button>
        <Button
          onClick={() => {
            set(present - 1);
          }}
          style={{ marginRight: 15 }}
        >
          减少
        </Button>
        <Button onClick={reset}>重置</Button>
      </div>
      <Title level={3}>总结</Title>
      <Paragraph>
        本例也可以通过useState来实现，但是相较于useReducer来说，useState实现起来更加的麻烦。
        因此在如下场景中，建议使用useReducer代替useState进行状态管理：
        <ul>
          <li>state中的状态值之间相互关联；</li>
          <li>下一个 state的更新依赖于之前的 state。</li>
        </ul>
      </Paragraph>
    </Typography>
  );
}

export default Chapter5_1;
