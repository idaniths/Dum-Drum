import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SinglePad from "./components/Singlepad/SinglePad";
import PadBoard from "./components/PadBoard/PadBoard";

function App() {
  // const newPadArray = new Array(16).fill("");
  // const newPadsArray = new Array(8).fill("");

  return (
    <div className="App">
      <header className="App-header">
        <PadBoard />
        {/* {newPadsArray.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {newPadArray.map((e, i) => (
              <SinglePad key={i} />
            ))}
          </div>
        ))} */}
      </header>
    </div>
  );
}

export default App;
