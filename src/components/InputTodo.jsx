import React from "react";

export const InputTodo = (props) => {
    const { todoText, onChange, onClick } = props; /* propsの中身を使いやすいように取り出す */
    return (
        <>
            <div className='input_area'>
                <input placeholder='TODOを入力' value={todoText} onChange={onChange} />
                <button onClick={onClick}>追加</button>
            </div>
        </>
    )
}