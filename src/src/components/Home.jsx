import { useEffect } from "react";
import axios from "axios";
import NavigateBar from "./NavigateBar";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import LeftBar from "./LeftBar";
import Offers from "./Offers";
import { useState } from "react";
import Categories from "./Categories";
import "./Home.css";
import "./Header.css";
import "./LeftBar.css";
import "./Footer.css";
import "./Carousel.css";
import "./Offers.css";
import "./NavigateBar.css";
import SearchGame from "./SearchGame";

function Home() {
  const [games, setGames] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const getGames = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseURL}/games`,
      });
      setGames(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error al cargar los juegos");
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    games && (
      <div>
        <NavigateBar />

        <section className="container-fluid  p-0">
          <div className="home_ppalContainer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ">
            <LeftBar />

            <div className="home_headerContain d-none d-sm-flex justify-content-center">
              <Header />
            </div>

            <div className="home_belowContainer   container-fluid ">
              <div className="container p-0">
                <div className="">
                  <div id="categoryBottom" className="categoryContainer ">
                    <Categories />
                  </div>
                </div>
                <div className="home_titlesContainer me-0 d-flex ">
                  <h2 className=" mt-5 pt5">All Games</h2>
                </div>

                <div className="prueba p-0 m-0 pt-3 pb-5 ">
                  <SearchGame games={games} />
                </div>
              </div>

              <div className="home_containerCenter container general mt-0  p-0 d-flex  m-auto">
                <div
                  id="limited_editions"
                  className="home_titlesContainer me-4 pt-5 mb-3 "
                >
                  <h2 className="ms-5">A bit of everything</h2>
                </div>

                <div id="general_conteiners" className="offer_editions">
                  <div className=" home_offertContent  d-block mt-5 mb-5 pb-2">
                    <Offers games={games} />
                  </div>
                </div>
              </div>

              <div className="cont_banner pt-5 mt-5 mb-5">
                <Carousel />
              </div>

              <div className="pt-5 pb-5">
                <Footer />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default Home;
