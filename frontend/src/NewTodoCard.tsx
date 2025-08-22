import * as React from "react";
import {useState} from "react";
import axios from "axios";
import type {Todo} from "./Todo.ts";

type Props = {
    getAllTodos: () => void
}
export default function NewTodoCard(props: Props) {

    const [text, setText] = useState("")


    function CaptureText(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function saveTodo() {

        axios.post("/api/todo",
            {
            description: text,
            status: "OPEN"
        } as Todo)
            .then(() => props.getAllTodos())
            .finally(() => setText(""))
    }

    return (
        <div className={"todo-card"}>
            {<input value={text} type="text" onInput={CaptureText} placeholder={"Add description for new Todo here .."}/>}
            <button hidden={(text.trim()==="") ? true : false} onClick={saveTodo}> Save</button>
        </div>
    );
}
