import { createSlice } from "@reduxjs/toolkit";

const initialState  = [];

const todoSlice  = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
        },
        removeTodo(state, action) {
            const deleteIndex = action.payload;
            return state.filter((val, index) => index !== deleteIndex )
        }
    }

})

export const { addTodo,  removeTodo} = todoSlice.actions;
export default todoSlice.reducer



