

const Counter2 = ({ count, setCount }) => {
    const handleClickAdd = () => {
        setCount(prev => prev + 1);
    }

    const handleClickSubtract = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div className="flex justify-center items-center">
            <button onClick={handleClickSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleClickAdd}>+</button>
        </div>
    )
}

export default Counter2
