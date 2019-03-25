// src/Travel.js
import React from "react";

const Travel = ({ destination, country, image, distance, }) => (
  <figure>
    <img src={image} alt={country} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <p>{country}</p>
      <p>{distance}</p>

    </figcaption>
  </figure>
);

export default Travel;
