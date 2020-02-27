import React from "react";
import "./Homepage.css";
import Header from "./Header/Header";
import Reviews from "./Reviews/Reviews";
import Ambiance from "./Ambiance/Ambiance";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Reviews />
      <Ambiance />
      <Menu />
      <Contact />
    </div>
  );
}

export default Homepage;
