/* eslint-disable react/prop-types */
import './Scoreboard.css'
const Scoreboard = ({ score, bestScore }) => {
    return (
      <div className="container">
        <div className="text">Current Score: {score}</div>
        <div className="text">Best Score: {bestScore} </div>
      </div>
    );
  };
  
  export default Scoreboard;
  