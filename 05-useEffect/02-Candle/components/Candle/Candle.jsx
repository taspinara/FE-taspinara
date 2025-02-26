import { useEffect, useState } from "react"
import "./Candle.css"

const Candle = () => {
    // Start at 100% height
    const [height, setHeight] = useState(100);

    useEffect(() => {
        // Set an interval to decrease the candle height every 2 seconds
        const interval = setInterval(() => {
            setHeight(prevHeight => {
                // If the height is 10% or less, reset it to 100%
                if (prevHeight <= 10) {
                    return 100;
                }
                // Otherwise, reduce by 5%
                return prevHeight - 5;
            })
        }, 2000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    console.log(height)

    return (
        <div className="exercise">
            {/* Override the candleContainer height dynamically */}
        <div className="candleContainer" style={{ height: `${height}%`}}>
            <div className="candle">
            <div className="flame">
                <div className="shadows" />
                <div className="top" />
                <div className="middle" />
                <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" />
            </div>
        </div>
        </div>
    )
}

export default Candle
