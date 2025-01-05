/* eslint-disable react/prop-types */
const Card = ({ card, onClick }) => {
  return (
    <div onClick={onClick} className="cards">
      <img src="card.image" alt="card.name" className="card" />
      <h3 className="card-name">{card.name}</h3>
    </div>
  );
};

export default Card;
