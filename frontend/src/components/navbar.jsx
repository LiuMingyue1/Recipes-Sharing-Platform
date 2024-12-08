import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import navsearchIcon from "../assets/navsearch.svg";
import navaddIcon from "../assets/navadd.svg";
import navuserIcon from "../assets/navuser.svg";
import navlikeIcon from "../assets/navlike.svg";
import "../style/navbar.css";

const Navbar = ({ currentPageLink, onSearch }) => {
  const { user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState(""); // 保存搜索关键字

  const handleSearchClick = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery); // 点击搜索图标时触发搜索
    }
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // 更新输入值
    if (query.trim() === "") {
      onSearch(""); // 如果输入为空，恢复默认状态
    }
  };

  return (
    <div className="navbar">
      {/* 搜索框 */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search Recipes or Ingredients"
          className="search-input"
          value={searchQuery}
          onChange={handleInputChange} // 监听输入变化
        />
        <img
          src={navsearchIcon}
          alt="Search Icon"
          className="search-icon"
          onClick={handleSearchClick} // 点击图标时触发搜索
        />
      </div>

      {/* 中间 LOGO 按钮 */}
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
        <Link to={user ? `/profile/${user.userId}` : "/login"}>
          <img src={navuserIcon} alt="User Icon" className="navbar-icon" />
        </Link>
        <Link to="/like">
          <img src={navlikeIcon} alt="Like Icon" className="navbar-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

