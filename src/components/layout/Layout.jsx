import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import './style.css'

function Layout({todos, onChange, onRemove, addTodo}){
    return(
        <div className="layout">
            <Header/>
            <Form addTodo={addTodo}/>
            <List todos = {todos} onChange={onChange} onRemove={onRemove}/>
        </div>
    )
}

export default Layout;