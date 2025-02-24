import './App.css'
import Student from "./components/Student";

const App = () => {
  const name = "Ali";
  const age = 24;
  const city = "Flensburg";
  const state = "Schleswig-Holstein";
  console.log(name)
  
  return (
    <div>
      <h1>My first React App</h1>
      <h1>My first React App</h1>
      <p>Welcome to my first react app</p>
      <section>
          <Student name={name} age={age} city={city} state={state}/>
      </section>
    </div>
  )
}

export default App

