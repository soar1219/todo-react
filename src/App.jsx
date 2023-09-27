import React, { useState } from 'react';
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleateTodos, setImcompleateTodos] = useState([]);
  const [compleateTodos, setCompleateTodos] = useState([]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleateTodos, todoText]; /* 新しい配列を作成　ImcompleateTodosにtodoTextを追加 */
    setImcompleateTodos(newTodos);/* newTodosをsetImcompleateTodosに反映する */
    setTodoText("");
  };

  const onClickDeleate = (index) => {
    const newTodos = [...imcompleateTodos]
    newTodos.splice(index, 1);
    setImcompleateTodos(newTodos);
  };

  const onClickCompleate = (index) => {
    const newIncompleateTodos = [...imcompleateTodos];
    newIncompleateTodos.splice(index, 1);

    const newCompleateTodos = [...compleateTodos, imcompleateTodos[index]];

    setImcompleateTodos(newIncompleateTodos);
    setCompleateTodos(newCompleateTodos);
  };

  const onClickBack = (index) => {
    const newCompleateTodos = [...compleateTodos];
    newCompleateTodos.splice(index, 1);

    const newIncompleateTodos = [...imcompleateTodos, compleateTodos[index]];

    setCompleateTodos(newCompleateTodos);
    setImcompleateTodos(newIncompleateTodos);
  }


  return (
    <>
      <div className='input_area'>
        <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete_area'>
        <p className='title'>未完了のTODO</p>
        {/* 状態が変化しそうなものは先にモックとしてstateで初期値を与えて処理する */}
        <ul>
          {imcompleateTodos.map((todo , index) => { /* mapに２つ目の引数(index)を割り当てると順番が振り当てられる */
            return(
              <div key={todo} className='list_row'>{/* ループの親タグに目標のためのキーを設定する必要がある mapで使用 */}
                <li>{todo}</li>
                <button onClick={() => onClickCompleate(index)}>完了</button>
                <button onClick={() => onClickDeleate(index)}>削除</button>{/* 関数にしておくと勝手に実行されてしまうのでアロー関数を設置することで勝手に関数が動かなくすることができる */}
              </div>
            )
          })}
        </ul>
      </div>
      <div className='complete_area'>
        <p className='title'>完了したTODO</p>
        <ul>
          {compleateTodos.map((todo, index) => {
            return(
              <div key={todo} className='list_row'>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            )
          })}
          
        </ul>
      </div>
    </>
  );
}