import React from "react";
import Dev from "../images/back-end-developer.gif";
import emailjs from "emailjs-com";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  function enviarEmail() {
    const email = {
      from: "seu_email@example.com",
      to: "marqueschristmann8@gmail.com",
      subject: document.getElementById("subject").value,
      text: document.getElementById("body").value,
    };

    emailjs
      .send("seu_serviço", "seu_template", email, "seu_user_id")
      .then((info) => {
        console.log("E-mail enviado com sucesso!", info);
      })
      .catch((err) => {
        console.error("Erro ao enviar o e-mail:", err);
      });
  }

  return (
    <div>
      <div className="Contatocontainer">
        <div className="Contato">
          <h1>Entre em Contato</h1>
          <form id="emailForm">
            <input type="text" id="from" placeholder="Seu e-mail" />
            <input type="text" id="subject" placeholder="Assunto" />
            <textarea id="body" placeholder="Escreva Suas Dúvidas"></textarea>
            <button onClick={enviarEmail}>Enviar</button>
          </form>
          <div className="ContatosLinks">
            <a
              href="https://api.whatsapp.com/send?phone=5584981493410&text=Ol%C3%A1%20tudo%20bem."
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://br.linkedin.com/in/marques-christmann-363a3a224?trk=public_profile_browsemap"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/marqueschristmann/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <img className="illustration2" src={Dev} alt="Animação do Dev" />
      </div>
    </div>
  );
};

export default Contact;
