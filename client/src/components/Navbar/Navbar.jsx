import React from "react";
import Me from "../../img/me.png";
import Classes from "./Navbar.module.css";
import Mario from "../../img/mario.png";
import Folder from "../../img/folder.png";
import Home from "../../img/home.png";
import Contact from "../../img/contact.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFolder,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={`${Classes.nav} navbar nes-container is-dark is-rounded`}>
      <div>
        <i className={`nes-octocat animate ${Classes.gitCat}`}></i>
      </div>
      <div className={Classes.buttons}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `nes-btn is-primary ${Classes.button}`
              : `nes-btn ${Classes.button}`
          }
          to="/"
        >
          <FontAwesomeIcon icon={faHouse} color="black" size="2x" /> Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `nes-btn is-primary ${Classes.button}`
              : `nes-btn ${Classes.button}`
          }
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="black" size="2x" /> About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `nes-btn is-primary ${Classes.button}`
              : `nes-btn ${Classes.button}`
          }
          to="/projects"
        >
          <FontAwesomeIcon icon={faFolder} color="black" size="2x" /> Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `nes-btn is-primary ${Classes.button}`
              : `nes-btn ${Classes.button}`
          }
          to="/contact"
        >
          <FontAwesomeIcon icon={faIdCard} color="black" size="2x" /> Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
