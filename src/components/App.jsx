import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("Click button to get time");

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    console.log("Current time:", newTime);
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
