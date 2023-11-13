import React from "react";
import "../components/css/Categories.css";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <div className="category_contain p-0">
      <div className="container category_subContain pt-5 p-0">
        <NavLink to="/category/action">
          <div id="allCategory" className="category_actions ">
            <div id="category_actions" className="category_name">
              <h3>ACTION</h3>
            </div>
            <img src="/img/portrait_godofwar.jpg" alt="" />
          </div>
        </NavLink>

        <NavLink to="/category/adventure">
          <div id="allCategory" className="category_adventur bg-dark">
            <div id="category_adventure" className="category_name">
              <h3>ADVENTURE</h3>
            </div>
            <img src="/img/portrait_assassin.jpg" alt="" />
          </div>
        </NavLink>

        <NavLink to="/category/Rol">
          <div id="allCategory" className="category_rol">
            <div id="category_rol" className="category_name">
              <h3>ROL</h3>
            </div>
            <img src="/img/portrait_skyrim.jpg" alt="" />
          </div>
        </NavLink>

        <NavLink to="/category/Shooter">
          <div id="allCategory" className="category_shootter">
            <div id="category_shooter" className="category_name">
              <h3>SHOOTER</h3>
            </div>
            <img src="/img/portrait_callofduty.2jpg.jpg" alt="" />
          </div>
        </NavLink>

        <NavLink to="/category/Sports">
          <div id="allCategory" className="category_sport bg-white">
            <div id="category_sports" className="category_name">
              <h3>SPORTS</h3>
            </div>
            <img src="/img/portrait_fifa.webp" alt="" />
          </div>
        </NavLink>

        <NavLink to="/category/Strategy">
          <div id="allCategory" className="category_strategy">
            <div id="category_strategy" className="category_name">
              <h3>STRATEGY</h3>
            </div>
            <img src="/img/portrait_ageofempires.jpg" alt="" />
          </div>
        </NavLink>

        <NavLink to="/category/terror">
          <div id="allCategory" className="category_terror bg-white">
            <div id="category_terror" className="category_name">
              <h3>TERROR</h3>
            </div>
            <img src="/img/portrait_dead.jpg" alt="" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
