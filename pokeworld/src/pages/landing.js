// Import links
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactCardSlider from "react-card-slider-component";


// Images
import img from '../3d pokemmon/Group 4.png';
import Background from '../3d pokemmon/BackNeon.png'
import poke1 from './poke1.png'
import decor from '../3d pokemmon/Group 3.png'
import ring from './ledring.png'
import poke2 from './pokemon.png'
import foot from './footer.png'
import Eevee from '../3d pokemmon/Group 6.png'
import Bulb from '../3d pokemmon/Group 7.png'
import Mew from '../3d pokemmon/Group 8.png'



function Landing() {

  const handleButtonClick = () => {
    window.location.href = "https://pokeapi.co";
  };

  
const slides = [
  {
    image: Eevee,
    title: "This is a title",
    description: "This is a description"
    // clickEvent: sliderClick
  },
  {
    image: Bulb,
    title: "This is a second title",
    description: "This is a second description"
    // clickEvent: sliderClick
  },
  {
    image: Mew,
    title: "This is a third title",
    description: "This is a third description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/500/400",
    title: "This is a fourth title",
    description: "This is a fourth description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/200/300",
    title: "This is a fifth title",
    description: "This is a fifth description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/800/700",
    title: "This is a sixth title",
    description: "This is a sixth description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/800/900",
    title: "This is a seventh title",
    description: "This is a seventh description"
    // clickEvent: sliderClick
  }
];


    return (
     <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', width: '100%', height: '3100px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: 'black'}}>
       <header>
        <img style={{width: '900px', marginTop: '-50px'}} src={img} className="Header" />
        <p style={{color:'white', marginLeft: '70px', paddingTop: '250px', fontSize: '65px', width: '350px'}} className="neonText" >PokeWorld</p>
        <p style={{color:'white', marginLeft: '70px', paddingTop: '25px', fontSize: '20px', width: '600px'}}>Discover, Educate, and Master the Pokemon World with PokeApi: Your Gateway to API Knowledge!</p>
        
        <div class="neon__button" style={{marginLeft: '70px', paddingTop: '40px'}}>
         <a href="#" onClick={handleButtonClick}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           Discover More
         </a>
        </div>
       </header>
       
       <h1 style={{color: 'white', marginLeft: '170px', marginTop: '150px', width: '650px'}}>Feautured Pokemon</h1>
       <div style={{ marginTop: "5em"}} className="Slides">
           <ReactCardSlider slides={slides} />
      </div>

       <img style={{marginLeft: '650px'}} src={decor} />
       <h1 style={{marginTop: '-500px', color: 'white', fontSize: '30px', marginLeft: '120px', width: '750px', boxShadow: '5px, 10px, 5px'}}>"Strong Pokemon. Weak Pokemon. That is only the selfish perception of people. Truly skilled trainers should try to win with all their favorites." <br/>
       <br/> - Karen.</h1>
       <img style={{width: '400px', marginTop: '180px', marginLeft: '-150px'}} src={ring} />

       <h1 style={{marginTop: '-350px', marginLeft: '170px', color: '#5DC7F3'}}>Compare and see the stronger Pokemon</h1>

       <img style={{width: '1200px', marginTop: '100px', marginBottom: '50px', marginLeft: '150px', boxShadow: '5px'}} src={poke2} />



       <div style={{marginLeft: '150px'}}>
        <h1 style={{color: '#F4AC1C'}}>Umbreon</h1>
        <p style={{color: 'white'}}>Type: Dark <br/> Abilities: Synchronize</p>
       </div>
       
       
       <div style={{ marginLeft: '420px', marginTop: '-140px'}}>
        <h1 style={{color: '#F4AC1C', fontSize: '35px'}}>Eevee</h1>
        <p style={{color: 'white', fontSize: '15px'}}>Type: Normal <br/> Abilities: Run, Adapt</p>
       </div>

       <div style={{ marginLeft: '670px', marginTop: '-140px'}}>
        <h1 style={{color: '#F4AC1C', fontSize: '30px'}}>Bulbasaur</h1>
        <p style={{color: 'white', fontSize: '15px'}}>Type: Grass, Poison <br/> Abilities: Overgrow</p>
       </div>

       <div style={{ marginLeft: '900px', marginTop: '-75px'}}>
        <h1 style={{color: '#F4AC1C', fontSize: '35px'}}>Sandshrew</h1>
        <p style={{color: 'white', fontSize: '15px'}}>Type: Ground <br/> Abilities: Sand Veil</p>
       </div>

       <div style={{marginLeft: '1140px', marginTop: '-80px'}}>
        <h1 style={{color: '#F4AC1C'}}>Pikachu</h1>
        <p style={{color: 'white'}}>Type: Electric <br/> Abilities: Static</p>
       </div>

       <Link to="/compare">
        <button className="CompareButton">Compare</button>
      </Link>

       <img style={{width: '1200px', marginLeft: '120px', marginTop: '250px'}} src={foot} />
       
     </div>
    )
}

export default Landing;