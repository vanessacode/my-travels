import React, { Component } from 'react';
import Travel from './Travel'

const myTravels = [
    {
    destination: "Barcelona",
    country: "Spain",
    image: "https://seahub-cdn-prod.s3.amazonaws.com/ports-pages/Barcelona%20Small.jpeg",
    distance: "586"
    },

    {
    destination:"Paris",
    country:"France",
    image:"https://blog.homair.com/wp-content/uploads/2014/07/paris.jpg",
    distance:"779"
    },

    {
    destination: "Milan",
    country: "Italy",
    image: "https://file.aperion.it/slir/w500-c5:3/caf/3/4/341333549203.jpg",
    distance: "1177"
    },
];


const Travels = () => (
    <div>
        {myTravels.map( x => (
            <Travel destination ={x.destination} country={x.country} image={x.image} distance= {x.distance} />
        ))};
    </div>
  );
  
  export default Travels;
