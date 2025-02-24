import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(""); // State for input field

  // Event Handlers
  const handleButtonClick = () => {
    alert("Button Clicked! 🎉");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log("Input Value:", event.target.value);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <StudentList />

      {/* Input & Button Section */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleInputChange}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "1rem",
          }}
        />
        <button
          onClick={handleButtonClick}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Click Me
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
