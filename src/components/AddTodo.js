import React, { useState } from "react";
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from "react-redux";

export default function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
   


    function addTodoHandler() {
        if (input) {
            
            dispatch(addTodo(input))
            setInput("");
        }
    }

    return <>
        <div>
            <h3>Add New Todo</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value) } />
            <button onClick={addTodoHandler}>Add</button>
        </div>
    </>
        
        
}