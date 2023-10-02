import React from "react";
import "./ThanksForBuy.css";
import { Link } from "react-router-dom";

function ThanksForBuy() {
  return (
    <div className="thanks_for_buy_container bg-white">
      <div className="text_thanksforbuy">Thanks for your purchase!</div>
      <img
        className="img_thanksforbuy"
        src="./src/assets/img5thanksforbuy.jpeg"
        alt=""
      />
      <Link to={"/"}>
        <button className="go_shop_button">Return to the store!</button>
      </Link>
    </div>
  );
}

export default ThanksForBuy;
