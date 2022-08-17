import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const List = ({todos, onChange, onRemove}) =>{
    
    return (
        <div className="list-box">
            <h2>할겁니다..🍒</h2>
            <div className="list-wrapper">
            {todos.map(todo => 
                todo.isDone === false
                    ? <Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/> : null
            )}
            </div>
            <h2>했어요..!🥑</h2>
            <div className="list-wrapper">
            {todos.map((todo) => 
                todo.isDone === true
                    ? <Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/> : null
            )}
            </div>
        </div>
    )
}

export default List;