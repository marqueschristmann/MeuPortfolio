import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    QuickClincDesc:
      "O QuickClinc é uma aplicação de agendamento clínico desenvolvida para fins de estudo, utilizando as tecnologias React para o front-end e Express para o back-end. Este projeto visa demonstrar a construção de uma aplicação completa, desde a interface do usuário até a lógica do servidor.",
    QuickClincGithub:
      "https://github.com/marqueschristmann/QuickClinic/tree/master",

    ConteoodoDesc:
      "Neste projeto, atuei como freelancer como desenvolvedor front-end durante seis meses. Trabalhei com diversas tecnologias, incluindo React, Storybook e TailwindCSS, além de outras ferramentas e frameworks. Minha principal responsabilidade foi desenvolver e implementar interfaces de usuário responsivas e dinâmicas, garantindo uma experiência de usuário intuitiva e agradável. Colaborei estreitamente com a equipe de back-end e outros stakeholders para assegurar que as funcionalidades atendiam às especificações e requisitos do o projeto. vale destacar que o projeto é privado mais esse é link do site é: https://www.conteoodo.com/.",
    ConteoodGithub: "",

    MyFinancesDesc:
      "My Finances é uma aplicação web de gerenciamento financeiro pessoal desenvolvida com Vite, React e TypeScript, Tailwindcss. Permite que os usuários controlem suas entradas e despesas, mantendo um registro de todas as movimentações financeiras.",
    MyFinancesGithub:
      "https://github.com/marqueschristmann/MyFinances/tree/master",

    EncomendasDesc:
      "O ProjectEncomendas é um sistema para monitoramento de encomendas, desenvolvido como um projeto de estudo para a combinação de React Native com Node.js. O projeto visa fornecer uma base para o desenvolvimento de aplicações móveis e de backend, explorando as melhores práticas em programação e arquitetura de software.",
    EncomendasGithub:
      "https://github.com/marqueschristmann/Project-Encomendas/tree/master",

    ProjetoApiDesc:
      "Este projeto é uma API para um sistema de aluguéis de carros, desenvolvida usando NestJS e seguindo a metodologia de Test-Driven Development (TDD).",
    ProjetoApiGithub:
      "https://github.com/marqueschristmann/AlugAuto/tree/master",

    NodeApiDesc:
      "Este projeto teve como objetivo autenticar e autorizar usuários por meio de Tags RFID, utilizando uma integração SIMPLES com um Banco de Dados. Foi desenvolvido com Node.js e Express, garantindo uma implementação eficiente e segura. Através desta integração, os dados de cada usuário, juntamente com as informações das suas respectivas Tags RFID, são armazenados e verificados no banco de dados, proporcionando um processo de autenticação e autorização robusto.",
    NodeApiGithub:
      "https://github.com/marqueschristmann/backend-slocked/tree/master",

    BuscadorDesc:
      "Scholarly Shelf é uma aplicação web que permite aos usuários pesquisar e descobrir artigos acadêmicos de diversas fontes. Ela oferece uma interface amigável para encontrar artigos de pesquisa relevantes em diferentes campos de estudo.",
    BuscadorGithub: "https://github.com/marqueschristmann/scholarly-shelf",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
