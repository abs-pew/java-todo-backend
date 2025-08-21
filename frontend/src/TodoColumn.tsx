import type {TodoStatus} from "./TodoStatus.ts";
import type {Todo} from "./Todo.ts";
import TodoCard from "./TodoCard.tsx";

type Props = {
    status: TodoStatus,
    todos: Todo[]
}
export default function TodoColumn(props : Props) {
    return (
        <div>
            <h2 align={"center"}> {props.status}</h2>
            {props.todos.map((todo : Todo) => <TodoCard todo={todo} key={todo.id}/>)}
        </div>
    );
}
