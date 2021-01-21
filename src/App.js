import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😉": "winking face",
  "🤣": " Rolling on the Floor Laughing",
  "🥰": "Smiling Face with Hearts",
  "😒 ": "Unamused Face",
  "🤫": "Shushing Face"
};

var shoppinglist = ["milk", "bread", "butter"];
export default function App() {
  const [userInputMeaning, setuserInputMeaning] = useState("");
  function inputEventHandler(event) {
    var userInput = event.target.value;
    var userInputMeaning = emojiDictionary[userInput];
    setuserInputMeaning(userInputMeaning);
    if (userInputMeaning === undefined) {
      userInputMeaning = "This is not defined here...Please try something else";
    }
  }

  return (
    <div className="App">
      <h1>Inside out!!</h1>
      <input onChange={inputEventHandler}></input>
      <div class="output">{userInputMeaning}</div>
      <ul>
        {shoppinglist.map((item) => {
          console.log(item);
          return <li>items</li>;
        })}
      </ul>
    </div>
  );
}
