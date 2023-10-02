import "./LimitedEdition.css";
import NavigateBar from "./NavigateBar";
import React, { useState, useEffect } from "react";

function SpecialOffer() {
  const [currentImage, setCurrentImage] = useState("");
  const [games, setGames] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseURL}/games`)
      .then((response) => response.json())
      .then((data) => setGames(data.slice(0, 5)))
      .catch((error) => console.error("Error fetching juegos:", error));
  }, []);
  if (!games.length) {
    return null;
  }

  if (!currentImage) {
    setCurrentImage(`${baseURL}/img/${games[0].img}`);
  }

  return (
    <>
      <div className="row d-flex">
        <div className="col-lg-8 p-0 ms-3">
          {games[0] && (
            <div className="special_big pb-5">
              <img
                src={currentImage}
                alt="Big Image"
                className="special_image ms-5 pb-2 pt-3"
              />
            </div>
          )}
        </div>
        <div className="col-lg-4 special_cont ms-4">
          {games.map((game) => (
            <div key={game._id} className="special_small ps-5 mt-3">
              <div className="special_smallContainer text-center">
                <img
                  src={`${baseURL}/img/${game.img}`}
                  alt={`Card ${game._id}`}
                  className="small_image pb-1"
                  style={{ maxWidth: "100%", height: "auto" }}
                  onClick={() => setCurrentImage(`${baseURL}/img/${game.img}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpecialOffer;
