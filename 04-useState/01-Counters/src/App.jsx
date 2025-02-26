import { useState } from "react"
import Counter2 from "./components/Counter2";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <Counter2 count={count1} setCount={setCount1} />
      <Counter2 count={count2} setCount={setCount2} />
      <Counter2 count={count3} setCount={setCount3} />
    </div>
  )
}

export default App
















// import { useState } from "react"
// import Counter from "./components/Counter";

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   return (
//     <div className='flex flex-col items-center gap-6 min-h-screen p-10 bg-gray-100'>
//         <h1 className="text-3xl font-bold">Multi-Counter App</h1>
//         <div className="flex gap-6">
//           <Counter count={count1} setCount={setCount1} />
//           <Counter count={count2} setCount={setCount2} />
//           <Counter count={count3} setCount={setCount3} />
//         </div>
//     </div>
//   )
// }

// export default App





