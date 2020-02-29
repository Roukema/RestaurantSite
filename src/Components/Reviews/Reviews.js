import React from "react";
import "./Reviews.css";
import RatingStars from "./Rating/Rating";

function Reviews() {
  return (
    <div className="reviews">
      <div className="review">
        <img></img>
        <h4>Name</h4>
        {/* <RatingStars rating="2" /> */}
        <p>★★★★★</p>
        <p> Goed verhaal leuke winkel</p>
      </div>
      <div className="review">
        <img></img>
        <h4>Name2</h4>
        {/* <RatingStars rating="2" /> */}
        <p>★★★★</p>
        <p> Goed verhaal aardige winkel</p>
      </div>
      <div className="review">
        <img></img>
        <h4>Name3</h4>
        {/* <RatingStars rating="2" /> */}
        <p>★★</p>
        <p> Goed verhaal matig winkel</p>
      </div>
    </div>
  );
}

export default Reviews;
