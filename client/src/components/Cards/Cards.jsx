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
  {
    name: "WeatherApp",
    description: "A simple React-app WeatherApp using OpenWeather api.",
    deploymentLink: "https://axel-lois.github.io/Weather-App-V1/",
    codeLink: "https://github.com/axel-lois/Weather-App-V1/tree/Code",
    img: "https://user-images.githubusercontent.com/82421661/157134373-ab428272-3e6a-48fc-b3ff-7a8c662cfd18.png",
  },
  {
    name: "PomodoroApp",
    description: "Flexible and easy to use React pomodoro timer app",
    deploymentLink: "https://axel-lois.github.io/Pomodoro-App/",
    codeLink: "https://github.com/axel-lois/Pomodoro-App/tree/Code",
    img: "https://user-images.githubusercontent.com/82421661/157135671-3870e393-764b-4e83-aef8-cfe00845dfe9.png",
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
