import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import NavigateBar from "./NavigateBar";
import Categories from "./Categories";
import Footer from "./Footer";
import RightBar from "./RightBar";
import "./CategoriesStyle.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import ButtonAddToCart from "./ButtonAddToCart";
import slugify from "slugify";
import LeftBar from "./LeftBar";

export default function CategoryTerror() {
  const [terrorCategory, setTerrorCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const dispatch = useDispatch();

  const handleAddToCart = (game) => {
    dispatch(addItem(game));
    console.log("added to cart:", game);
  };

  const getGamesByCategory = async (category) => {
    try {
      const response = await axios.get(`${baseURL}/categories/Terror`);
      setTerrorCategory(response.data);
      console.log("traje chouses");
      console.log(response.data);
    } catch (error) {
      console.log("error al cargar los juegos");
    }
  };

  useEffect(() => {
    getGamesByCategory(activeCategory); // Llama a la función para obtener juegos por categoría
  }, [activeCategory]); // Vuelve a cargar cuando cambie la categoría activa

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Actualiza la categoría activa al hacer clic en el enlace
  };

  return (
    <div className="principalContainer_terror">
      <div>
        <NavigateBar />
        <div>{<RightBar />}</div>
        <LeftBar />
        <div className="cardContainer">
          <div className="container cardSubContainer m-auto m-0 p-0 pb-5">
            <div className="text-center pt-5 ">
              <div id="categoryBottom" className="categoryContainer pt-5">
                <Categories />
              </div>
              <h1 className="textTitle pb-4 pt-5 ">TERROR</h1>
            </div>
            <div className="container containerWrapperCard p-0 pt-5 m-auto">
              {terrorCategory ? (
                <div className="row">
                  {terrorCategory.games.map((game) => (
                    <div
                      key={game._id}
                      className="wrapperCards col-sm-12 col-md-12 col-lg-6 col-xl-4 m-0"
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
                              <button className="buy-button">
                                <ButtonAddToCart game={game} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No hay juegos disponibles.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <Footer />
      </div>
    </div>
  );
}
