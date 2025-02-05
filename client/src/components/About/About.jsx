import React from "react";
import Classes from "./About.module.css";
import Me from "../../img/me.png";
import Node from "../../img/nodejs.svg";
import Javascript from "../../img/javascript.svg";
import Reactjs from "../../img/react.svg";
import Angular from "../../img/angular.svg";
import Flux from "../../img/flux.svg";
import Kubernetes from "../../img/kubernetes.svg";
import Java from "../../img/java.svg";
import NextJs from "../../img/nextjs.svg";
import Typescript from "../../img/typescript.svg";
import Docker from "../../img/docker.svg";
import Golang from "../../img/golang.svg";
import CV from "../../resume/AxelLoisResume.pdf";
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
            oriented) engineer from Uruguay. I consider myself a fluent
            Javascript engineer, nevertheless I am open to learning new
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
            <img src={Angular} /> Angular
          </div>
          <div className={Classes.Item}>
            <img src={NextJs} /> NextJs
          </div>
          <div className={Classes.Item}>
            <img src={Typescript} /> Typescript
          </div>
        </div>
        <h3>Back-end</h3>
        <div className={Classes.backEndDiv}>
          <div className={Classes.Item}>
            <img src={Node} /> Node
          </div>
          <div className={Classes.Item}>
            <img src={Docker} />
            Docker
          </div>
          <div className={Classes.Item}>
            <img src={Kubernetes} />
            Kubernetes
          </div>
          <div className={Classes.Item}>
            <img src={Flux} />
            Flux
          </div>
          <div className={Classes.Item}>
            <img src={Golang} />
            Golang
          </div>
          <div className={Classes.Item}>
            <img src={Java} />
            Java
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
