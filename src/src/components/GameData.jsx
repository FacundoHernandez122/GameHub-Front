import React, { useEffect, useState } from "react";
import "./GameData.css";
import { Link, useParams } from "react-router-dom";
import "./NavigateBar.css";
import NavigateBar from "./NavigateBar";
import axios from "axios";
import ButtonAddToCart from "./ButtonAddToCart";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function GameData(game) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const slug = useParams();
  const [showGame, setShowGame] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = (game) => {
    dispatch(addItem(game));
    console.log("added to cart:", game);
  };

  const getNameUrl = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseURL}/games/${slug.slug}`,
        params: { slug: slug.slug },
        data: { slug: slug },
      });
      console.log(slug);
      return setShowGame(response.data);
    } catch {
      console.log(error);
    }
  };

  useEffect(() => {
    getNameUrl();
  }, []);

  const backgroundImageStyle = showGame
    ? {
        backgroundImage: `url(${baseURL}/img/${showGame.img2})`,
      }
    : {};

  return (
    <div>
      <NavigateBar />
      {showGame && (
        <div
          style={backgroundImageStyle}
          className="gameid_container container-fluid p-0 m-0 vw-100 vh-100  d-flex"
        >
          <div className="gameid_subcontainer col-6">
            <div className="gameid_leftTop d-flex align-items-end justify-content-end ">
              <img
                id="cardGradient"
                src={`${baseURL}/img/${showGame.img}`}
                alt=""
              />
            </div>
            <div className="gameid_leftBottom d-flex ">
              <div className="gameid_cardPrice  d-flex justify-content-center">
                <div className="gameid_cardPrice_button d-flex align-items-center">
                  <ButtonAddToCart game={showGame} />
                </div>
              </div>
            </div>
          </div>
          <div className="gameid_subcontainer col-6  vh-100">
            <div className="gameid_rightTop  d-flex justify-content-center">
              <div className="gameid_description  d-flex flex-column align-items-center">
                <h4 className="me-5 mt-3">Description</h4>
                <div className="gameid_bottom ps-1 mt-0">
                  <p>{showGame.description}</p>
                </div>
              </div>
            </div>
            <div className="gameid_rightBottom d-flex flex-column justify-content-center align-items-center ">
              <div className="gameid_rightBottom_video d-flex justify-content-center w-auto">
                <video
                  muted={true}
                  autoPlay={true}
                  controls
                  width="600px"
                  src={showGame.video}
                ></video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameData;
