import React from "react";
import Classes from "./Card.module.css";

const Card = ({ name, description, code, page, img }) => {
  return (
    <div className={`${Classes.container} nes-container is-rounded is-dark`}>
      <h2>{name}</h2>
      <img src={img} />
      <p> {description}</p>
      <div>
        <a target="_blank" href={page} className="nes-btn is-primary">
          Page
        </a>
        <a target="_blank" href={code} className="nes-btn is-primary">
          Code
        </a>
      </div>
    </div>
  );
};

export default Card;
