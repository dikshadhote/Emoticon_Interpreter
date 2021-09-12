import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😉": "winking face",
  "🤣": " Rolling on the Floor Laughing",
  "🥰": "Smiling Face with Hearts",
  "😒 ": "Unamused Face",
  "🤫": "Shushing Face",
  "🤝":"Handshake",
  "🤩":"Star-Struck",
  "🤔":" Thinking Face",
  "😏":"Smirking Face",
  "🤗":"Hugging Face"
};

var emojisweknow = Object.keys(emojiDictionary);
export default function App() {
  const [userInputMeaning, setuserInputMeaning] = useState("");
  //if emoji is searched in text area then it is taken from object array
  function inputEventHandler(event) {
    var userInput = event.target.value;
    var userInputMeaning = emojiDictionary[userInput];
    setuserInputMeaning(userInputMeaning);
    if (userInputMeaning === undefined) {
      userInputMeaning = "This is not defined here...Please try something else";
    }
  }
  function emojiClickHandler(emoji) {
    //console.log(emoji);
    var userInputMeaning = emojiDictionary[emoji];
    setuserInputMeaning(userInputMeaning);
  }

  return (
    <div className="App">
      <h1>Inside out!!</h1>
      <input onChange={inputEventHandler}></input>
      <h2>{userInputMeaning}</h2>
      <h3>Emojis we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
