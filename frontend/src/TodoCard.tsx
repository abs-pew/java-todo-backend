
import type {Todo} from "./Todo.ts";
import axios from "axios";
import {useState} from "react";
import type {TodoStatus} from "./TodoStatus.ts";

type Props={
    todo: Todo,
    getAllTodos: () => void
}
export default function TodoCard(props :  Props)
{
    function DeleteTodo() {
        axios.delete("api/todo/" + props.todo.id)
            .then(props.getAllTodos)
    }

const[description, setDescription] = useState(props.todo.description)

    {/* const[editModeFlag, setEditModeFlag] =  useState<boolean>(false)*/}

    function ChangeText(event: React.ChangeEvent<HTMLInputElement>) {

const newDescription = event.target.value
setDescription(newDescription)
        axios.put("api/todo/" + props.todo.id, {
            ...props.todo,
            description: newDescription
        } as Todo)
    }


    function moveTodo(targetStatus:TodoStatus) {
        axios
            .put("api/todo/" + props.todo.id, {
            ...props.todo,
            status: targetStatus
        } as Todo)
            .then(props.getAllTodos)
    }


    return (
        <div className={"todo-card"}>
            <input value={description} onInput={ChangeText}/>
            {
                props.todo.status === "OPEN"
                    ? <div></div>
                    : <button onClick={() =>
                        props.todo.status === "IN_PROGRESS"
                            ? moveTodo("OPEN")
                            : moveTodo("IN_PROGRESS")}> ⬅️</button>
            }

            <button onClick={DeleteTodo}> Delete </button>
            {
                props.todo.status === "DONE"
                    ? <div></div>
                    : <button onClick={() =>
                        props.todo.status === "IN_PROGRESS"
                            ? moveTodo("DONE")
                            : moveTodo("IN_PROGRESS")}> ➡️</button>
            }
        </div>
    );
}
