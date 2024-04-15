import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  const [isBarsVisible, setIsBarsVisible] = useState(true);

  const toggleButtons = () => {
    setIsBarsVisible(!isBarsVisible);
  };
  return (
    <>
      <nav>
        <a className="brand-logo" href="/">
          Bandage
        </a>

        <div className=" d-flex align-items-center">
          <ul className={isBarsVisible ? "ul " : "ul show"}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/project">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contacts</NavLink>
            </li>
          </ul>
        </div>
        <div className="search-love">
          <ul>
            <li>
              <IoIosSearch />
            </li>
            <li>
              <CiShoppingCart />
            </li>
            <li>
              <CiHeart />
            </li>
            <li className="d-flex gap-2 align-items-center">
              <FaRegUser /> Login
            </li>
          </ul>
        </div>
        <div className="fa-icons">
          <li style={{ display: isBarsVisible ? "flex" : "none" }}>
            <FontAwesomeIcon icon={faBars} onClick={toggleButtons} />
          </li>
          <li style={{ display: !isBarsVisible ? "flex" : "none" }}>
            <FontAwesomeIcon icon={faTimes} onClick={toggleButtons} />
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
