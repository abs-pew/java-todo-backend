import axios from "axios";
import type {Todo} from "./Todo.ts";
import TodoCard from "./TodoCard.tsx";
import {useEffect, useState} from "react";


function App() {

    const [todos, setTodos] = useState<Todo[]>()

    useEffect(() => {
        axios.get("api/todo")
            .then(response => {
                setTodos(response.data)
            })
    }, [])

    if (!todos) {
        return (
            "loading ..."
        )
    }



    const toDosList:Todo[] = [
        {
            id: "TD01",
            description: "collect requirements",
            status : "OPEN"
        },
        {
            id: "TD02",
            description: "document requirements",
            status : "OPEN"
        }
    ]
  return (
    <>
        <h1> TODOs </h1>
        {todos.map(todo => <TodoCard key= {todo.id} todo={todo}/>)}
    </>
  )
}

export default App
