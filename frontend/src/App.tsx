import axios from "axios";
import type {Todo} from "./Todo.ts";
import {useEffect, useState} from "react";
import TodoColumn from "./TodoColumn.tsx";
import {allPossibleTodos, type TodoStatus} from "./TodoStatus.ts";


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

  return (
    <>
        <h1 className={"h1"}> TODOs </h1>
<div className={"grid"}>
    {
        allPossibleTodos.
        map(
            (status:TodoStatus) => {
                const filteredTodos = todos.filter(todo => todo.status === status)
                return (<TodoColumn status={status} todos={filteredTodos}/>)}
        )
    }
</div>



    </>
  )
}

export default App
