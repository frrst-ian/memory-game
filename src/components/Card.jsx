/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({ card, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <img src="card.image" alt="card.name" className="card-image" />
      <h3 className="card-title">{card.name}</h3>
    </div>
  );
};

export default Card;
