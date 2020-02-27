import React from "react";
import "./Ambiance.css";

function Ambiance() {
  return (
    <div className="ambiance">
      <div className="ambianceText">
        <h3>Genieten, feesten, eten</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          feugiat pharetra urna. Suspendisse elementum id neque sed sagittis.
          Praesent eu dui sem. Nam egestas ligula a erat hendrerit lobortis. Ut
          vel convallis ipsum. Vestibulum mattis enim non odio rhoncus,
          fermentum convallis dolor ornare. Nam nec leo massa.{" "}
        </p>
      </div>
      <div className="ambianceSlides">
        <slider>
          <slide></slide>
          <slide></slide>
          <slide></slide>
          <slide></slide>
        </slider>
      </div>
    </div>
  );
}

export default Ambiance;
