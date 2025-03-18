import { useContext } from "react";
import ToDoItem from "./ToDoItem"
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
    const { state } = useContext(ToDoContext);
    const { todos, filter } = state;

    // Filter todos based on the current filter state.
    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        if (filter === "completed" && todo.completed) return true;
        if (filter === "active" && !todo.completed) return true;
        return false;
    });

    return (
        <ul>
            {filteredTodos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default ToDoList