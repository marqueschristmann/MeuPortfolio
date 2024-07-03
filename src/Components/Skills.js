import React from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaDocker,
  FaPlus,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiAndroid,
  SiDjango,
  SiExpress,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    Tailwindcss: <SiTailwindcss />,
    ReactNative: <SiAndroid />,
    Typescript: <SiTypescript />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Python: <FaPython />,
    Django: <SiDjango />,
    Mysql: <SiMysql />,
    Postgresql: <SiPostgresql />,
    Docker: <FaDocker />,
    Linux: <SiLinux />,
    Mais: <FaPlus />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
