import React from "react";
import Card from "../Card/Card";
import Classes from "./Cards.module.css";

let projects = [
  {
    name: "PokemonApp",
    description: "Full-stack pokemon crud app for pokemon-lovers.",
    deploymentLink: "https://pokemon-app-rose.vercel.app",
    codeLink: "https://github.com/axel-lois/Pokemon-App",
    img: "https://user-images.githubusercontent.com/82421661/157132300-f24ac194-7b2c-493f-a17e-c1b1fe8e706c.png",
  },
  {
    name: "Contablito",
    description: "FullStack crud app made with MERN stack.",
    deploymentLink: "https://contablito-v3.vercel.app",
    codeLink: "https://github.com/axel-lois/Contablito-V3",
    img: "https://user-images.githubusercontent.com/82421661/159184688-eba6eade-48c6-429f-b538-09b4890e4abc.png",
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
