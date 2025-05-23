import React from "react";
import ProjectBox from "./ProjectBox";
import MyFinances from "../images/My-Finances.png";
import QuickClinc from "../images/QuickClinc.PNG";
import Encomendas from "../images/Encomendas.jpg";
import ProjetoApi from "../images/projetoapi.webp";
import NodeApi from "../images/Nodeapi.png";
import Conteoodo from "../images/Conteoodo.PNG";
import Buscador from "../images/Buscador.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        Meus <b>Projetos</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={Encomendas} projectName="Encomendas" />
        <ProjectBox projectPhoto={ProjetoApi} projectName="ProjetoApi" />
        <ProjectBox projectPhoto={NodeApi} projectName="NodeApi" />
        <ProjectBox projectPhoto={MyFinances} projectName="MyFinances" />
        <ProjectBox projectPhoto={QuickClinc} projectName="QuickClinc" />
        <ProjectBox projectPhoto={Conteoodo} projectName="Conteoodo" />
        <ProjectBox projectPhoto={Buscador} projectName="Buscador" />
      </div>
    </div>
  );
};

export default Projects;
