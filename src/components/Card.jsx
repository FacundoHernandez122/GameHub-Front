import React from "react";
import "../components/css/Card.css";
import { NavLink } from "react-router-dom";
import ButtonAddToCart from "./ButtonAddToCart";

export default function Card() {
  return (
    <div>
      <div className="card_containerCard bg-danger">
        <NavLink>
          <div>
            <div className="card_foot">
              <img src="/public/watchDogs.jpg" alt="" />
              <p>Price</p>
              <span>ADD TO CART</span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
