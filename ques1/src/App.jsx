import React from "react";
import Child from "./Child";

function App() {
  const name = "Ronak";
  const age = 18;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export default App;