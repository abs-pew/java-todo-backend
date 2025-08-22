import type {TodoStatus} from "./TodoStatus.ts";
import type {Todo} from "./Todo.ts";
import TodoCard from "./TodoCard.tsx";
import NewTodoCard from "./NewTodoCard.tsx";

type Props = {
    status: TodoStatus,
    todos: Todo[],
    getAllTodos: () => void
}
export default function TodoColumn(props : Props) {
    return (
        <div>
            <h2 align={"center"}> {props.status}</h2>
            {props.todos.map((todo : Todo) => <TodoCard todo={todo} key={todo.id} getAllTodos={props.getAllTodos}/>)}

            {
                (props.status === "OPEN") && <NewTodoCard getAllTodos={props.getAllTodos}/>
            }
        </div>
    );
}
