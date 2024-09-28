import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <br />
      <Card username="chaiaurcode" btnText="Click me"/>
      <Card/>
    </> 
  );
}

export default App;
