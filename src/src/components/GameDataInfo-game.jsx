import React, { Component } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavigateBar from "./NavigateBar";

export class Admin extends Component {
  render() {
    return (
      <div>
        <NavigateBar />
        <section className="game_id ">
          <div className="container ">
            <div className="row">
              <div className="content_left col-lg-8 d-none d-lg-block m-auto">
                <img className="effect_img" src="/Skyrim.jpg" alt="" />
                <h1 className="game_title">The Elder Scrolls V: Skyrim</h1>
              </div>

              <div className="content_right col-lg-4 col-md-12 m-auto d-block">
                <div className="container_links d-flex mt-1 ms-5 me-5 text-center">
                  <Link
                    id="link"
                    className=" text-decoration-none"
                    to="/gameid/trailer"
                  >
                    Trailer
                  </Link>
                  <Link
                    id="link"
                    className="text-decoration-none"
                    to="/gameid/info-game"
                  >
                    Info Game
                  </Link>
                  <Link
                    id="link"
                    className=" selected text-decoration-none"
                    to="/gameid"
                  >
                    Description
                  </Link>
                </div>
                <h3 className="description text-center pe-5 mt-3 ps-5">
                  Description
                </h3>
                <div className="content_game mt-4 pe-4 ms-5">
                  <p className="paragraph_game   text-white">
                    Two hundred years have passed since the events of The Elder
                    Scrolls IV: Oblivion, and it is now 4E 201. The High King of
                    Skyrim has been killed, and the threat of Civil War looms
                    over the land of Skyrim; One side wishes to secede from the
                    weakened Third Empire, while the other wishes to remain a
                    part of it. <br />
                    <br />
                    To make matters worse, this schism is the final event in a
                    prophecy foretold by the Elder Scrolls that will lead to the
                    return of the dragons under Alduin, the Nordic god of
                    destruction. The player starts the game on a cart heading
                    for the chopping block after being caught with the
                    Stormcloaks in an ambush by the Imperial Legion. As the
                    player lays their head on the chopping block, the dragon
                    Alduin attacks. <br />
                    <br /> In the midst of the chaos, Hadvar, several
                    Stormcloaks, along with their leader and fellow prisoner,
                    Ulfric Stormcloak, assist in the player's escape. The player
                    may choose between the assistance of Ralof, the Stormcloak
                    who arrived with Ulfric, or Hadvar, the Imperial soldier
                    tasked with reading off the names of the prisoners being
                    sent to their execution. After assisting and gaining the
                    favor of Jarl Balgruuf the Greater, The player later learns
                    that they are Dovahkiin, or Dragonborn, a person charged
                    with the duty of defeating Alduin and the dragons.
                    <br />
                    <br />
                    Eventually, the player meets Delphine, and Esbern, two of
                    the last remaining Blades, and becomes the pupil of the
                    esteemed Greybeards of High Hrothgar.
                  </p>
                </div>
                <div className="d-flex m-auto justify-content-center ">
                  <div
                    data-tooltip=""
                    className="button d-flex justify-content-center"
                  >
                    <div className="button-wrapper">
                      <div className="text text_button">U$S 50.00</div>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-bag-check"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div clas>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Admin;
