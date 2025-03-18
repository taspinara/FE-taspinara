import { useContext } from "react"
import { ToDoContext } from "../context/ToDoContext"

const ToDoItem = ({ todo }) => {
    const { dispatch } = useContext(ToDoContext);
    
    return (
        <li className='flex items-center mb-2'>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                className='mr-2' 
            />
            <span className={todo.completed ? 'line-through' : ''}>
                {todo.text}
            </span>
        </li>
    )
}

export default ToDoItem