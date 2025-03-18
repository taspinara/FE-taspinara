import { createContext, useEffect, useReducer } from "react";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filter: "all"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            return { ...state, todos: [newTodo, ...state.todos] }
        }

        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            }

        case "SET_FILTER":
            return { ...state, filter: action.payload };
    
        default:
            return state;
    }
};

export const ToDoContext = createContext(); 

export const ToDoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Save todos to localStorage whenever they change.
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }, [state.todos]);

    return (
        <ToDoContext.Provider value={{ state, dispatch }}>
            {children}
        </ToDoContext.Provider>
    );
};