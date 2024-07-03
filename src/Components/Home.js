import React from "react";
import DBZ from "../images/Luchas-de-Dragon-ball-Z.gif";
import Typed from "./Typed.js";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Olá! 👋</h1>
          <h1>
            Me Chamo <b>MarquesChristmann</b>
          </h1>
          <Typed />
        </div>

        <img className="illustration" src={DBZ} alt="Animação do SpaceBoy" />
      </div>
    </div>
  );
};

export default Home;
