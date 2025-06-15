import React from "react";
import Card from "../Card/Card";
import Classes from "./Cards.module.css";

let projects = [
  {
    name: "PokemonApp",
    description: "Full-stack pokemon crud app for pokemon-lovers.",
    deploymentLink: "https://pokemonclient-dun.vercel.app",
    codeLink: "https://github.com/Carlos13-Lab/Pokemon-App",
    img: "https://i.ibb.co/gD4LdHp/Pokemon.png",
  },
  {
    name: "Interact",
    description: "Platform for administration of courses, qualifications, events, classes and users of an educational institution.",
    deploymentLink: "https://c5-31.vercel.app",
    codeLink: "https://github.com/Carlos13-Lab/C5-31",
    img: "https://i.ibb.co/dGWTsSD/interact.png",
  },
];

const Cards = () => {
  return (
    <div className={`${Classes.container} nes-container is-rounded is-dark`}>
      {projects.map((p) => {
        return (
          <Card
            key={p.name}
            name={p.name}
            description={p.description}
            code={p.codeLink}
            page={p.deploymentLink}
            img={p.img}
          />
        );
      })}
    </div>
  );
};

export default Cards;
