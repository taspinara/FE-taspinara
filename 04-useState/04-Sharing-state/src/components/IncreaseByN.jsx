

const IncreaseByN = ({ multiplier, setCounter }) => {
    return (
        <div>
            <button
                onClick={()=>setCounter(prev => prev + multiplier)}
            >
                Click to increase by {multiplier}
            </button>
        </div>
    )
}

export default IncreaseByN
