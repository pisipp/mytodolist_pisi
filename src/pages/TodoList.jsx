import React, {useState} from "react";
import Layout from "../components/layout/Layout"

function TodoList(){
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "오늘 일을 내일로 미루지 말자",
            desc: "매일매일 리액트를 공부합니다.",
            isDone: false
        },
        {
            id: 2,
            title: "끼니는 제때에",
            desc: "우영우 김밥을 먹습니다.",
            isDone: true
        },
    ]);
    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const onChange = (id) => {
        setTodos(todos.map(
            todo => todo.id === id
                ? { ...todo, isDone: !todo.isDone }
                : todo
        ))
    }

    const addTodo = (title, desc) =>{
        const todo ={
            id: todos.length+1,
            title:title,
            desc:desc,
            isDone:false
        }
        setTodos([...todos, todo]);
    }
    return (
        <>
            <Layout todos = {todos} onChange={onChange} onRemove={onRemove} addTodo={addTodo}/>
        </>
    )
}

export default TodoList;