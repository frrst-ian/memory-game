import React, { useState, useEffect } from "react";
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleGameOver = (finalScore) => {
    if (finalScore > bestScore) {
      setBestScore(finalScore);
    }
    setScore(0);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="container">
        <h1>Memory Game</h1>
        <Scoreboard score ={score} bestScore={bestScore}/>
        <Gameboard onScore={handleScore} onGameOver={handleGameOver}/>
    </div>
    
  );
}

export default App;
