import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //usestate function returns two values so we store it in array.
  //The array value must not change so it is declare as const
  const [likeCounter, setLikeCounter] = useState(0);
  function btnClickHandler() {
    var newLikeCounterValue = likeCounter + 1;
    setLikeCounter(newLikeCounterValue);
  }
  return (
    <div className="App">
      <h1>Inside out!!</h1>
      <button onClick={btnClickHandler}>Hit like!</button>
      {likeCounter}
    </div>
  );
}
