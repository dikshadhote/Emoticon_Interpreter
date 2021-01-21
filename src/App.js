import React from "react";
import "./styles.css";

function btnClickHandler() {
  console.log("clicked");
}
export default function App() {
  return (
    <div className="App">
      <h1>Inside out!!</h1>
      <button onClick={btnClickHandler}>Hit like!</button>
    </div>
  );
}
