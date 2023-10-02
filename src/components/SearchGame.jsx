import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./SearchGame.css";
import slugify from "slugify";
import { addItem } from "../redux/cartSlice";
import ButtonAddToCart from "./ButtonAddToCart";

function SearchGame({ games }) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const isGameInCart = (game) => {
    return cartItems.some((item) => item._id === game._id);
  };
  const handleAddToCart = (game) => {
    if (!isGameInCart(game)) {
      dispatch(addItem(game));
    } else {
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div id="search_container" className=" container b  p-0 m-0 pt-3 pb-4 ">
      <div>
        <div className="height_wrapper">
          <div
            id="search-input"
            className="search-input d-flex ps-3 pb-4 text-start"
          >
            <input
              type="text"
              placeholder="Search your game..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="container_wapperHome">
            <div className="container  containerWrapperCard p-0 m-auto">
              <div className="row">
                {filteredGames.length > 0 ? (
                  filteredGames.map((game) => (
                    <div
                      key={game._id}
                      className="wrapperCards  col-sm-12 col-md-12 col-lg-6 col-xl-4 m-0"
                    >
                      <NavLink
                        to={`/${slugify(game.name, {
                          replacement: "_",
                          lower: true,
                        })}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div>
                          <div className="wrapperImg m-3">
                            <img
                              className="animated fadeInRight cardImg"
                              src={`${baseURL}/img/${game.img}`}
                              alt=""
                            />
                            <div className="image-overlay">
                              <h3 className="price">USD {game.price}</h3>
                              <button className="buy-button home_button">
                                <ButtonAddToCart game={game} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  ))
                ) : (
                  <p>No results found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchGame;
