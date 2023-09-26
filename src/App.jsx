import React from 'react';
import "./style.css";

export const App = () => {
  return (
    <>
      <div className='input_area'>
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div className='incomplete_area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          <div className='list_row'>
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className='list_row'>
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className='complete_area'>
        <p className='title'>完了したTODO</p>
        <ul>
          <div className='list_row'>
            <li>ううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
}