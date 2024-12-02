import React from "react";
import { Link } from "react-router-dom";
import navsearchIcon from '../assets/navsearch.svg';
import navaddIcon from '../assets/navadd.svg';
import navuserIcon from '../assets/navuser.svg';
import navlikeIcon from '../assets/navlike.svg';
import "../style/navbar.css"; 

const Navbar = ({ currentPageLink }) => {
  return (
    <div className="navbar">
      {/* 左侧搜索框 */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search Recipes or Ingredients"
          className="search-input"
        />
         <img src={navsearchIcon} alt="Search Icon" className="search-icon" />
      </div>

      {/* 中间按钮文字 */}
      <div className="navbar-center">
        <Link to="/home" className="navbar-logo-button">
          co-eater
        </Link>
      </div>

      {/* 右侧图标 */}
      <div className="navbar-right">
        <Link to="/add">
          <img src={navaddIcon} alt="Add Icon" className="navbar-icon" />
        </Link>
        <Link to="/login">
          <img src={navuserIcon} alt="User Icon" className="navbar-icon" />
        </Link>
        <Link to="/like">
          <img src={navlikeIcon} alt="Like Icon" className="navbar-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
