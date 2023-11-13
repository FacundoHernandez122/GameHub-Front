import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import GameData from "./components/GameData";

import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import CategoryTerror from "./components/CategoryTerror";
import CategoryAction from "./components/CategoryAction";
import CategoryAdventure from "./components/CategoryAdventure";
import CategoryRol from "./components/CategoryRol";
import CategorySports from "./components/CategorySports";
import CategoryStrategy from "./components/CategoryStrategy";
import CategoryShooter from "./components/CategoryShooter";
import CheckOut from "./components/CheckOut";
import ThanksForBuy from "./components/ThanksForBuy";
import RightBar from "./components/RightBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticatedUser = () => {
    setIsAuthenticated(true);
  };

  const logOutUser = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/category/terror" element={<CategoryTerror />} />
        <Route path="/category/action" element={<CategoryAction />} />
        <Route path="/category/adventure" element={<CategoryAdventure />} />
        <Route path="/category/Rol" element={<CategoryRol />} />
        <Route path="/category/Sports" element={<CategorySports />} />
        <Route path="/category/Strategy" element={<CategoryStrategy />} />
        <Route path="/category/Shooter" element={<CategoryShooter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/:slug" element={<GameData />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/thanksForBuy" element={<ThanksForBuy />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <RightBar />
    </>
  );
}

export default App;
