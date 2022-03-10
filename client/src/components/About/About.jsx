import React from "react";
import Classes from "./About.module.css";
import Me from "../../img/me.png";
import Node from "../../img/nodejs.svg";
import Javascript from "../../img/javascript.svg";
import Reactjs from "../../img/react.svg";
import Redux from "../../img/redux.svg";
import Html from "../../img/html.svg";
import Css from "../../img/css.svg";
import Bootstrap from "../../img/bootstrap.svg";
import Postgresql from "../../img/postgresql.svg";
import Mongodb from "../../img/mongodb.svg";
import Express from "../../img/express.svg";
import Sequelize from "../../img/sequelize.svg";
import CV from "../../resume/AxelLoisCV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className={`${Classes.container} nes-container is-rounded is-dark`}>
      <div className={`${Classes.aboutDiv} nes-container is-rounded is-dark`}>
        <div className={Classes.myPixelArt}>
          <img className={Classes.me} src={Me} />
          <p>Axel Lois</p>
        </div>
        <div className={Classes.description}>
          <p>
            Hi! My name is Axel. I am a passionate Full-stack (Back-end
            oriented) developer from Uruguay. I consider myself a fluent
            Javascript developer, nevertheless I am open to learning new
            languages. Apart from coding, I also like playing video-games and
            basketball.
          </p>
          <a href={CV} download className="nes-btn is-primary">
            <FontAwesomeIcon size="2x" icon={faFileArrowDown} /> Download resume
          </a>
        </div>
      </div>
      <div
        className={`${Classes.aboutDiv} ${Classes.belowDiv} nes-container is-rounded is-dark`}
      >
        <h1>Skills</h1>
        <h3>Front-end</h3>
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
            <img src={Redux} /> Redux
          </div>
          <div className={Classes.Item}>
            <img src={Html} /> Html
          </div>
          <div className={Classes.Item}>
            <img src={Css} /> Css
          </div>
          <div className={Classes.Item}>
            <img src={Bootstrap} /> Bootstrap
          </div>
        </div>
        <h3>Back-end</h3>
        <div className={Classes.backEndDiv}>
          <div className={Classes.Item}>
            <img src={Node} /> Node
          </div>
          <div className={Classes.Item}>
            <img src={Postgresql} />
            PostgreSQL
          </div>
          <div className={Classes.Item}>
            <img src={Mongodb} />
            MongoDB
          </div>
          <div className={Classes.Item}>
            <img src={Sequelize} />
            Sequelize
          </div>
          <div className={Classes.Item}>
            <img src={Express} />
            Express
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
