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
      image: "https://files.cults3d.com/uploaders/17560495/illustration-file/357eed92-0ff3-477d-bd43-78aba38b36aa/umbreon2.jpg",
      title: "UMBREON",
      description: "When darkness falls, the rings begin to glow",
      clickEvent: () => {
        window.open("https://www.google.com/search?q=Umbreon+pokemon&client=opera-gx&sca_esv=579729357&hl=en-GB&ei=e6tIZdHfE760hbIP-8euoAU&ved=0ahUKEwiRierUga-CAxU-WkEAHfujC1QQ4dUDCA8&uact=5&oq=Umbreon+pokemon&gs_lp=Egxnd3Mtd2l6LXNlcnAiD1VtYnJlb24gcG9rZW1vbjIIEAAYigUYkQIyBxAAGIoFGEMyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgcQABiKBRhDMgUQABiABDIFEAAYgARI0g1QAFj5CnAAeAGQAQCYAfcCoAHmD6oBBTItNi4xuAEDyAEA-AEB4gMEGAAgQYgGAQ&sclient=gws-wiz-serp", "_blank");
      }
    },
    {
      image: "https://files.cults3d.com/uploaders/17560495/illustration-file/753d7ef3-a2fa-4bc4-9482-1d30b02cb74e/shadowfx.jpg",
      title: "SHADOW MEWTWO",
      description: "To put its power into perspective",
      clickEvent: () => {
        window.open("https://www.google.com/search?q=Shadow+Meatwo+pokemon&client=opera-gx&sca_esv=579729357&hl=en-GB&ei=cZ5IZb7SDsushbIP2oqFgAk&ved=0ahUKEwj-zo2d9a6CAxVLVkEAHVpFAZAQ4dUDCA8&uact=5&oq=Shadow+Meatwo+pokemon&gs_lp=Egxnd3Mtd2l6LXNlcnAiFVNoYWRvdyBNZWF0d28gcG9rZW1vbjIHEAAYDRiABDIIEAAYCBgeGA0yCBAAGAgYHhgNMggQABgIGB4YDTIIEAAYCBgeGA0yCBAAGAgYHhgNMggQABgIGB4YDTIIEAAYCBgeGA0yCBAAGAgYHhgNMggQABgIGB4YDUiOIlAAWM4gcAB4AZABApgB4gegAfklqgELMi03LjAuMi4yLjG4AQPIAQD4AQHCAgYQABgHGB7CAggQABgIGAcYHsICChAAGAgYBxgeGA_iAwQYACBBiAYB&sclient=gws-wiz-serp", "_blank");
      }
    },
    {
      image: "https://files.cults3d.com/uploaders/17560495/illustration-file/be1ccaae-b8b6-4731-959c-1f4c464a2e0f/squuirtle.jpg",
      title: "SQUIRTLE",
      description: "Is it a boy or a girl?",
      clickEvent: () => {
        window.open("https://www.google.com/search?q=Squitle+pokemon&client=opera-gx&sca_esv=579729357&hl=en-GB&ei=xa1IZbGRCMOE9u8PzfuuqAQ&ved=0ahUKEwjxh5Xsg6-CAxVDgv0HHc29C0UQ4dUDCA8&uact=5&oq=Squitle+pokemon&gs_lp=Egxnd3Mtd2l6LXNlcnAiD1NxdWl0bGUgcG9rZW1vbjIIEAAYigUYkQIyCBAAGAcYHhgKMggQABiKBRiRAjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCkiyF1AAWJIPcAB4AZABAJgBpgOgAa4QqgEHMi01LjEuMbgBA8gBAPgBAcICBhAAGAcYHsICCxAAGAcYHhjxBBgK4gMEGAAgQYgGAQ&sclient=gws-wiz-serp", "_blank");
      }
    },
    {
      image: "https://files.cults3d.com/uploaders/17560495/illustration-file/860ab352-755a-47e2-9df8-e0ea5c565dda/vaporen2.jpg",
      title: "VAPOREON",
      description: "This is a fourth description",
      clickEvent: () => {
        window.open("https://www.google.com/search?q=VAPOREON+pokemon&client=opera-gx&sca_esv=579729357&hl=en-GB&ei=2q1IZYeMB6b97_UPqraWoA4&ved=0ahUKEwiH4ZX2g6-CAxWm_rsIHSqbBeQQ4dUDCA8&uact=5&oq=VAPOREON+pokemon&gs_lp=Egxnd3Mtd2l6LXNlcnAiEFZBUE9SRU9OIHBva2Vtb24yCBAAGIoFGJECMgcQABiKBRhDMgcQABiKBRhDMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IlAxQ7gdYzglwAHgDkAEAmAGlAqABqgSqAQMyLTK4AQPIAQD4AQL4AQHCAgQQABhH4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp", "_blank");
      }
    },
    {
      image: "https://files.cults3d.com/uploaders/17560495/illustration-file/50786f66-bea5-4656-8f9a-7c54cd55d84d/voltorb.jpg",
      title: "VOLTORB",
      description: "It's usually found in power plants",
      clickEvent: () => {
        window.open("https://www.google.com/search?q=VOLTORB+pokemon&client=opera-gx&sca_esv=579729357&hl=en-GB&ei=8q1IZfWFFbD_7_UPof-c0AI&ved=0ahUKEwj1xtyBhK-CAxWw_7sIHaE_ByoQ4dUDCA8&uact=5&oq=VOLTORB+pokemon&gs_lp=Egxnd3Mtd2l6LXNlcnAiD1ZPTFRPUkIgcG9rZW1vbjIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYigUYsAMYQzIKEAAYigUYsAMYQ0iMC1D-B1jeCXACeAGQAQCYAaICoAGiAqoBAzItMbgBA8gBAPgBAvgBAeIDBBgAIEGIBgGQBgo&sclient=gws-wiz-serp", "_blank");
      }
    },
    {
      image: "https://files.cults3d.com/uploaders/17560495/illustration-file/33dffd56-6ca0-4197-80ca-3124242f7e32/megagengear.jpg",
      title: "MEGA GENGAR",
      description: "Mega Gengar uses the Shadow Tag Ability",
      clickEvent: () => {
        window.open("https://www.google.com/search?q=MEGA+GENGAR+pokemon&client=opera-gx&sca_esv=579729357&hl=en-GB&ei=A65IZYzxIcfR9u8P3pCv2Ao&ved=0ahUKEwjM_vaJhK-CAxXHqP0HHV7IC6sQ4dUDCA8&uact=5&oq=MEGA+GENGAR+pokemon&gs_lp=Egxnd3Mtd2l6LXNlcnAiE01FR0EgR0VOR0FSIHBva2Vtb25I3QJQAFjoAXAAeAGQAQCYAYMCoAGDAqoBAzItMbgBA8gBAPgBAvgBAeIDBBgAIEGIBgE&sclient=gws-wiz-serpr", "_blank");
      }
    },
    {
      image: "https://files.cults3d.com/uploaders/17560495/illustration-file/493a5265-dcfa-49c3-af44-3009e4e86c31/megablastoise.jpg",
      title: "MEGA BLASTOISE",
      description: "Vulnerable to Grass and Electric moves",
      clickEvent: () => {
        window.open("https://www.google.com/search?q=MEGA+BLASTOISE+pokemon&client=opera-gx&sca_esv=579729357&hl=en-GB&ei=F65IZaG0EumM9u8PyZWvqAQ&ved=0ahUKEwjhm6yThK-CAxVphv0HHcnKC0UQ4dUDCA8&uact=5&oq=MEGA+BLASTOISE+pokemon&gs_lp=Egxnd3Mtd2l6LXNlcnAiFk1FR0EgQkxBU1RPSVNFIHBva2Vtb24yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMggQABiKBRiRAjIFEAAYgARI7wJQAFgAcAB4AZABAJgB_gGgAf4BqgEDMi0xuAEDyAEA-AEC-AEB4gMEGAAgQYgGAQ&sclient=gws-wiz-serp", "_blank");
      }
    }
  ];
  


    return (
     <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', width: '100%', height: '2700px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: 'black'}}>
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
       
       <h1 style={{color: 'white', marginLeft: '80px', marginTop: '150px', width: '650px'}}>Learn More About Pokemon Characters</h1>
       <div style={{ marginTop: "5em"}} className="Slides">
           <ReactCardSlider slides={slides} />
      </div>

      <div class="neon__button" style={{marginLeft: '600px', paddingTop: '60px'}}>
         <a href="/compare" onClick={handleButtonClick}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           Compare Pokemon
         </a>
        </div>

       <img style={{marginLeft: '650px'}} src={decor} />
       <h1 style={{marginTop: '-500px', color: 'white', fontSize: '30px', marginLeft: '120px', width: '750px', boxShadow: '5px, 10px, 5px'}}>"Strong Pokemon. Weak Pokemon. That is only the selfish perception of people. Truly skilled trainers should try to win with all their favorites." <br/>
       <br/> - Karen.</h1>
       
       <img style={{width: '1200px', marginLeft: '120px', marginTop: '400px'}} src={foot} />
       
     </div>
    )
}

export default Landing;