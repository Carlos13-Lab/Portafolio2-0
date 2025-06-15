import React from "react";
import Classes from "./About.module.css";
import Me from "../../img/Psyduck.png"; // Assuming you have a pixel art image of yourself
import Node from "../../img/nodejs.svg";
import Javascript from "../../img/javascript.svg";
import Reactjs from "../../img/react.svg";
import Git from "../../img/git.svg";
import Postman from "../../img/postman.svg";
import MongoDb from "../../img/mongodb.svg";
import Postgresql from "../../img/postgresql.svg";
import Typescript from "../../img/typescript.svg";
import Docker from "../../img/docker.svg";
import Zustand from "../../img/zustand.svg";
import CV from "../../resume/CV-Carlos-Diaz.pdf";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className={`${Classes.container} nes-container is-rounded is-dark`}>
      <div className={`${Classes.aboutDiv} nes-container is-rounded is-dark`}>
        <div className={Classes.myPixelArt}>
          <img className={Classes.me} src={Me} />
          <p>Carlos Diaz</p>
        </div>
        <div className={Classes.description}>
          <p>
                      👨‍💻 Desarrollador Full Stack JavaScript | React · Node.js · Express · PostgreSQL · MongoDB
          Apasionado por el desarrollo de soluciones tecnológicas robustas y escalables, con experiencia en el stack JavaScript (React, Node.js, Express) y bases de datos relacionales y no relacionales (PostgreSQL, MongoDB).

          Me defino como un profesional proactivo, autodidacta y comprometido, siempre en busca de nuevos desafíos que me permitan crecer y aportar valor. Mi capacidad para aprender rápidamente y adaptarme a entornos dinámicos me ha permitido dominar tecnologías de manera independiente y aplicarlas en proyectos reales.

          Lo que me motiva:

          🚀 Crear aplicaciones eficientes y de alto rendimiento.

          📚 Aprender y compartir conocimiento dentro de equipos colaborativos.

          🔍 Resolver problemas complejos con código limpio y arquitecturas bien estructuradas.

          En mi tiempo libre, exploro nuevas tecnologías, contribuyo a proyectos open-source o trabajo en ideas propias para seguir ampliando mis habilidades.

          ¡Conectemos y hablemos de tecnología, oportunidades o colaboraciones!
          </p>
          <a href={CV} download className="nes-btn is-primary">
            <FontAwesomeIcon size="2x" icon={faFileArrowDown} />  Descargar CV
          </a>
        </div>
      </div>
      <div
        className={`${Classes.aboutDiv} ${Classes.belowDiv} nes-container is-rounded is-dark`}
      >
        <h1>Skills</h1>
        <div className={Classes.frontEndDiv}>
          <div className={Classes.Item}>
            <img src={Javascript} />
            Javascript
          </div>
          <div className={Classes.Item}>
            <img src={Reactjs} />
            React
          </div>
          <div className={Classes.Item}>
            <img src={Typescript} /> Typescript
          </div>
          <div className={Classes.Item}>
            <img src={Postgresql} />
            PostgreSql
        </div>
          <div className={Classes.Item}>
            <img src={MongoDb} />
            MongoDB
          </div>
        </div>
        <div className={Classes.backEndDiv}>
          <div className={Classes.Item}>
            <img src={Node} /> Node
          </div>
          <div className={Classes.Item}>
            <img src={Docker} />
            Docker
          </div>
          <div className={Classes.Item}>
            <img src={Zustand} />
            Zustand
            </div>
          <div className={Classes.Item}>
            <img src={Git} />
         Git
          </div>
              <div className={Classes.Item}>
            <img src={Postman} />
         Postman
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
