import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const FilterComponent = () => {
    const { dispatch } = useContext(ToDoContext);

    const setFilterInView = filter => {
        dispatch({ type: "SET_FILTER", payload: filter });
    };

    return (
        <div className="flex mb-4 space-x-2">
            <button 
                onClick={() => setFilterInView("all")}
                className="bg-gray-200 px-3 py-1 rounded"
            >
                All
            </button>
            <button 
                onClick={() => setFilterInView("active")}
                className="bg-gray-200 px-3 py-1 rounded"
            >
                Active
            </button>
            <button 
                onClick={() => setFilterInView("completed")}
                className="bg-gray-200 px-3 py-1 rounded"
            >
                Completed
            </button>
        </div>
    )
}

export default FilterComponent