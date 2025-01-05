/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import './Gameboard.css'
import Card from "./Card";

const GameBoard = ({ onScore, onGameOver }) => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      // Fetch the list of Pokemon
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await response.json();
  
      // For each Pokemon, fetch its detailed data to get the proper image URL
      const detailedPokemonPromises = data.results.map(pokemon => 
        fetch(pokemon.url).then(res => res.json())
      );
  
      const detailedPokemon = await Promise.all(detailedPokemonPromises);
  
      const formattedCards = detailedPokemon.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        // Using official artwork for better quality images
        image: pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default
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

    return array
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
