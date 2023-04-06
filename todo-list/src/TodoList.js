import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("/todos").then((response) => {
            setTodos(response.data);
        });
    }, []);

    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
