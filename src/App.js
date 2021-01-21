import React from "react";
import "./styles.css";
var count = 0;
function btnClickHandler() {
  count++;
  alert(count);
}
export default function App() {
  return (
    <div className="App">
      <h1>Inside out!!</h1>
      <button onClick={btnClickHandler}>Hit like!</button>
    </div>
  );
}
