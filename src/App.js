import "./styles.css";
import React, { useState } from "react";  

export default function App() {
   const[counter,setCounter]=useState(0);

const handleClick1 = () => {
  // Counter state is incremented
  setCounter(counter + 1)
}

// Function is called everytime decrement button is clicked
const handleClick2 = () => {
  // Counter state is decremented
  setCounter(counter - 1)
}
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleClick1}>Increment</button>
      <h2>{counter}</h2>
      <button onClick={handleClick2}>Decrement</button>
    </div>
  );
}
