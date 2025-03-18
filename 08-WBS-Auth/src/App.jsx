import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainTemplate from "./layouts/MainTemplate"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<MainTemplate />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App