import { createSlice,nanoid } from "@reduxjs/toolkit"; 

// const initialState = () =>{
//    todos:[{id:1, text:"To do"}]
// }

export const todoSlice = createSlice({
    name:"todo",
    initialState:{todos:[{id:1, text:"To do",completed:true}]},
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id:nanoid(), 
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload.id
            })
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.id 
                    ? { ...todo, completed: action.payload.completed } 
                    : todo
            );
        }
        
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer