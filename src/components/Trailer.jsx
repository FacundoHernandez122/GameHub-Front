import React, { Component } from "react";
import NavigateBar from "./NavigateBar";
import "./GameData.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export class Trailer extends Component {
  render() {
    return (
      <div>
        <iframe
          width="968"
          height="603"
          src="http://cdn.akamai.steamstatic.com/steam/apps/2039878/movie_max.webm?t=1447375841"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Trailer;
