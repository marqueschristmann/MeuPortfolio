import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by MarquesChristmann</h4>
      <h4>Copyright &copy; 2024 MC 👽</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/marqueschristmann"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://br.linkedin.com/in/marques-christmann-363a3a224?trk=public_profile_browsemap"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailTo:marqueschristmann8@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
