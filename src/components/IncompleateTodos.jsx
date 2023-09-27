import React from "react";

export const IncompleateTodos = (props) => {
    const { todos , onClickDeleate, onClickCompleate} = props;
    return(
        <div className='incomplete_area'>
            <p className='title'>未完了のTODO</p>
            {/* 状態が変化しそうなものは先にモックとしてstateで初期値を与えて処理する */}
            <ul>
            {todos.map((todo , index) => { /* mapに２つ目の引数(index)を割り当てると順番が振り当てられる */
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
    );
};