import React, { useState } from "react";

function App() {
  setInterval(update, 1000);
  function time() {
    const date = new Date();
    let time = date.toLocaleTimeString("it-IT");
    return time;
  }
  function update() {
    setTime(time());
  }
  const [now, setTime] = useState(time());
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
