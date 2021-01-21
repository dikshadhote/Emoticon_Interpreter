import React from "react";
import "./styles.css";

var username = "Diksha";
var color = "red";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Welcome
        <span style={{ color }}> {username}</span>
      </h2>
    </div>
  );
}
