import React from "react";
import Indeximage from "../components/indeximage";
import "../style/startpage.css"
import { Link } from "react-router-dom";
import randomIcon from '../assets/random.svg';
import shareIcon from '../assets/startnav1.svg';
import saveIcon from '../assets/startnav2.svg';
import emailIcon from '../assets/startnav3.svg';
import coeaterIcon from '../assets/co-eater.svg';


const Start = () => {
  return (
    <>
    <div className="background">
      <div className="startNavbar">
        <div className="startIcons">
          <Link to="" className="shareButton"> <img src={shareIcon} alt="share Icon" className="icon" /> </Link>
          <Link to="" className="saveButton"> <img src={saveIcon} alt="save Icon" className="icon" /> </Link>
          <Link to="" className="emailButton"> <img src={emailIcon} alt="email Icon" className="icon" /> </Link>
        </div>
        <img src={coeaterIcon} alt="coeaters Icon" className="coeatericon" />
        <div className="startLinks">
          <Link to="/home" className="homebutton1">Recipes</Link>
          <Link to="/login" className="loginbutton">Login</Link>
        </div>
      </div>

      <div classname="startMain">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <h1 className="mealtime">Meal Time!</h1>
          <br />
          <h5 className="solgan">Enter ingredients to get recommended recipes.</h5>
          <div className="startlinks-container"> 
              <Link to="/home" className="homebutton">Get Recipes</Link>
              <Link to="" className="detialbutton"> <img src={randomIcon} alt="Random Icon" className="icon" /> Random Pick</Link>
          </div>
        </div>
      </div>
      </div>
    </>
        
    );
  };
  
  export default Start;