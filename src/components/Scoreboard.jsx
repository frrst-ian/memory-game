/* eslint-disable react/prop-types */
import "./Scoreboard.css";
const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="container">
      <p>
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <div className="text">Current Score: {score}</div>
      <div className="text">Best Score: {bestScore} </div>
    </div>
  );
};

export default Scoreboard;
