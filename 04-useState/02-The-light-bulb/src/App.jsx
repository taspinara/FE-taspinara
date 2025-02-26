import { useState } from "react";
import Lightbulb2 from "./components/Lightbulb2";
import "./App.css"

const App = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(prev => !prev);
    };

    return (
        <div>
            <button onClick={handleClick}>Switch</button>
            <Lightbulb2 isOn={isOn} />
        </div>
    )
}

export default App


















// import { useState } from "react";
// import Lightbulb from "./components/Lightbulb";
// import "./App.css"

// function App() {
//   const [isOn, setIsOn] = useState(false);
//   const btnOn = "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600";
//   const btnOff = "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";

//   return (
//     <div>
//       <button className={isOn ? btnOff : btnOn} onClick={() => setIsOn((prev) => !prev)}>
//         {isOn ? "Turn Off" : "Turn On"}
//       </button>
//       <Lightbulb isOn={isOn} />
//     </div>
//   )
// }

// export default App
