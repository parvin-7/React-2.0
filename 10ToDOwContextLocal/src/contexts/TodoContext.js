import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            text:"To do",
            completed:false,
        }
    ],
    addTodo:() =>{},
    updateTodo:()=>{},
    deleteTodo:()=>{},
    toggleComplete:()=>{},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider