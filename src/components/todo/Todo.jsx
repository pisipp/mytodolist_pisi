import React from "react";

import "./style.css";


const Todo = ({todo, onChange, onRemove}) => {
    return (
        <>
            <div className="todo" key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <div className='btn_set'>
                <button className='del_btn' onClick={()=> onRemove(todo.id)}>
                  삭제
                </button>
                { todo.isDone === false
                ?<button className='complet_btn' onClick={()=> onChange(todo.id)}>완료</button>
                :<button className='complet_btn' onClick={()=> onChange(todo.id)}>취소</button>
              }
            </div>
          </div>
        </>
    )
}

export default Todo;