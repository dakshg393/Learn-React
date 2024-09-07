import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos:[{id:1,text:"hello World"}]
}

export const todoSclice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }

            state.todos.push(todo)

        },
        removeTodo:(state,action)=> {
           state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

        updateTodo : (state,action) =>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload ? action.payload : todo )
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSclice.actions

export default todoSclice.reducer