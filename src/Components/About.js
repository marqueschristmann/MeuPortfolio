import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/marques.jpg";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">Me conheça! 👋</h1>
          <p>
            Oi meu nome é <b>MarquesChristmann</b> 😊. Sou de Cerro Corá/RN 🏡.
            Sou um <b>Desenvolvedor Web Full stack</b> 💻 e sou Graduado no
            Curso de <b>Tecnologia em Sistemas Para internet</b> 🎓, Pelo
            Instituto <b>IFRN</b> 🏫.
            <br />
            <br />
            Trabalhei como Freelancer <b>Desenvolvedor Front-End</b> 🖥️ na
            Conteoodo que é uma startup fintech 🚀. Adoro criar projetos
            originais 🌟, você pode conferir alguns dos meus trabalhos na seção
            de projetos 🗂️.
            <br />
            <br />
            Estou <b>aberto</b> a novas colaborações ou trabalhos onde possa
            contribuir e crescer 🌱. Sinta-se à vontade para entrar em contato
            comigo 📬, os links estão no rodapé 👇.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <img
              className="illustration3"
              src={Avatar}
              alt="Animação do SpaceBoy"
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading"> Habilidades 🤓</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="ReactNative" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Bootstrap" />
        <Skills skill="Python" />
        <Skills skill="Django" />
        <Skills skill="Tailwindcss" />
        <Skills skill="Typescript" />
        <Skills skill="Mysql" />
        <Skills skill="Postgresql" />
        <Skills skill="Docker" />
        <Skills skill="Linux" />
        <Skills skill="Mais" />
      </div>
    </>
  );
};

export default About;
