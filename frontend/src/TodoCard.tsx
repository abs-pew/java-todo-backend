
import type {Todo} from "./Todo.ts";
import axios from "axios";

type Props={
    todo: Todo,
    getAllTodos: () => void
}
export default function TodoCard(props :  Props) {
    function DeleteTodo() {
        axios.delete("api/todo/" + props.todo.id)
            .then(props.getAllTodos)
    }

    return (
        <div className={"todo-card"}>
            {props.todo.description}
            <button onClick={DeleteTodo}> Delete </button>
        </div>
    );
}
