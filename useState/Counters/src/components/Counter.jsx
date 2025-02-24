
const Counter = ({ count, setCount }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center w-40">
            <h2 className="text-xl font-bold mb-2">Counter</h2>
            <p className="text-2xl mb-2">{count}</p>
            <div className="flex justify-center gap-2">
                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    -
                </button>
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter
