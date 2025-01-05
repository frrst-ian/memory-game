/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = ({ onScore, onGameOver }) => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
      );
      const data = await response.json();
      const formattedCards = data.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
      setCards(shuffleCards(formattedCards));
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const shuffleCards = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return [...array];
  };

  const handleCardClick = (cardId) => {
    if (clickedCards.includes(cardId)) {
      onGameOver(clickedCards.length);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, cardId]);
      onScore();
    }
    setCards(shuffleCards([...cards]));
  };

  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
