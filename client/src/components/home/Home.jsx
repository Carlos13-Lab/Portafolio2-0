import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Classes from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div
      onClick={handleClick}
      className={`${Classes.container} nes-container is-rounded is-dark`}
    >
      <div>
        <h1 className={Classes.title_primary}>Axel Lois</h1>
        <h2 className={Classes.title_secondary}>Full Stack Engineer</h2>
        <h2
          className={`${Classes.title_tertiary} nes-pointer ${Classes.flash}`}
        >
          - Click to start -
        </h2>
      </div>
    </div>
  );
};

export default Home;
