import React, { useState } from 'react';
import "./style.css";
import { InputTodo } from './components/InputTodo';
import { IncompleateTodos } from './components/IncompleateTodos';
import { CompleateTodos } from './components/CompleateTodos';

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
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={imcompleateTodos.length >=5} />
      {imcompleateTodos.length >=5 && <p style={{color:"red"}}>登録できるTODOは５個までです。消化してください</p>}
      <IncompleateTodos todos={imcompleateTodos} onClickDeleate={onClickDeleate} onClickCompleate={onClickCompleate} />
      <CompleateTodos todos={compleateTodos} onClickBack={onClickBack} />
    </>
  );
}