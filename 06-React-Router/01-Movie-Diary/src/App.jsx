import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-white font-bold">Home</a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/movie/:id" element={} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
