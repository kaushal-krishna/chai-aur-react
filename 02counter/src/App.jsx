import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15

  const addValue = () => {
    if (counter !== 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
