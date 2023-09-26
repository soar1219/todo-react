import React, { useState } from 'react';
import "./style.css";

export const App = () => {
  const [imcompleateTodos, setImcompleateTodos] = useState(["ああああ","いいいい"]);
  const [compleateTodos, setCompleateTodos] = useState(["ううううう"]);
  return (
    <>
      <div className='input_area'>
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div className='incomplete_area'>
        <p className='title'>未完了のTODO</p>
        {/* 状態が変化しそうなものは先にモックとしてstateで初期値を与えて処理する */}
        <ul>
          {imcompleateTodos.map((todo) => {
            return(
              <div key={todo} className='list_row'>{/* ループの親タグに目標のためのキーを設定する必要がある mapで使用 */}
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })};
        </ul>
      </div>
      <div className='complete_area'>
        <p className='title'>完了したTODO</p>
        <ul>
          {compleateTodos.map((todo) => {
            return(
              <div key={todo} className='list_row'>
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            )
          })}
          
        </ul>
      </div>
    </>
  );
}