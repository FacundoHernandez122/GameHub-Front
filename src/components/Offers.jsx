import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../components/css/SearchGame.css";
import slugify from "slugify";
import { addItem } from "../redux/cartSlice";
import ButtonAddToCart from "./ButtonAddToCart";
import CardGame from "./CardGame";
import "../components/css/CardGame.css";

function Offers({ games }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const [shuffledGames, setShuffledGames] = useState([]);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  useEffect(() => {
    // Mezclar los juegos cuando el componente se monte
    setShuffledGames(shuffleArray(games));
  }, [games]);

  const filteredGames = shuffledGames
    .filter((game) => game.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 5);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (game) => {
    dispatch(addItem(game));
  };

  return (
    <div className="container container_offers">
      <div>
        <div className="search_scrollContent ps-5 pe-5  vh-100">
          <div className="">
            {filteredGames.map((game) => (
              <CardGame key={game._id} game={game} onAddToCart={() => handleAddToCart(game)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
