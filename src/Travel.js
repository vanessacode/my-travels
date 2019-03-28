// src/Travel.js
import React from "react";

const Travel = ({ destination, country, image, distance, }) => (
  <div>
    <h2>{destination}</h2>
    <h3>{country}</h3>
    <img src={image} alt={destination}/>
    <p>La distance entre la <b>Wild Code School Biarritz</b> et {destination} est de {distance} km.</p>
  </div>
);

export default Travel;
