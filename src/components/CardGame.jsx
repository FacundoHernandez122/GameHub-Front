import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../components/css/SearchGame.css";
import slugify from "slugify";
import { addItem } from "../redux/cartSlice";
import ButtonAddToCart from "./ButtonAddToCart";

export default function CardGame({ game }) {
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

  return (
    <div className="outer d-flex align-items-end mb-5">
      <div id="cardGradient" className="content animated fadeInLeft   ">
        <div className="cardTitle">
          <NavLink
            to={`/${slugify(game.name, {
              replacement: "_",
              lower: true,
            })}`}
            style={{ textDecoration: "none" }}
          >
            <h2 className=" col-sm-none m-auto ps-3">{game.name}</h2>
          </NavLink>
        </div>
        <div className="cardViewDetails bg-primary">
          <NavLink to={`/gameid/${game._id}`}></NavLink>
        </div>
        <div className="cardFooter mt-auto">
          <div className="d-flex align-items-end justify-content-between">
            <div>
              <div className="cardPrice fs-4 m-3">
                <p className=" game_price_offers">USD {game.price}</p>
              </div>
            </div>
            <div className="pe-3 pb-3">
              <ButtonAddToCart game={game} />
            </div>
          </div>
        </div>
      </div>
      <div className="cardGradient">
        <img
          className="animated fadeInRight cardImg"
          src={`${baseURL}/img/${game.img}`}
          alt="img"
        />
      </div>
    </div>
  );
}
