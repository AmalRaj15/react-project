

import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from '../features/todo/todoSlice'
import { useDispatch } from "react-redux";

export default function  Todos() {
  const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch();
    

     function deleteHandler(index) {
      dispatch(removeTodo(index))
     }

    return( 
    <>
                <h3>TODO List</h3>
                <ul style={{listStyle:'none'}}>
                    {
                       todos.map((todo, index) =><li>{todo} <button onClick={() => deleteHandler(index)}>Delete</button></li> )
                    }
                </ul>
    </>
    );
}