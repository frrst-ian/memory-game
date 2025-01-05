import React, { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <div>Scoreboard</div>
      <div>Game board</div>
    </>
  );
}

export default App;
