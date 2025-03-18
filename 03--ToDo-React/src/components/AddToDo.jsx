import { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

const AddToDo = () => {
    const { dispatch } = useContext(ToDoContext);
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo) return;
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setNewTodo("");
    } 

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex">
            <input 
                type="text" 
                name="todo" 
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder="Add a new to-do"
                className="flex-1 border rounded px-2 py-1 mr-2" 
            />
            <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </form>
    )
}

export default AddToDo