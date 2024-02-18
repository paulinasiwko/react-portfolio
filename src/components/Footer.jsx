import React from "react";
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
        <footer className="container-fluid">
          <div className="contactDetails">
            <a href="https://api.whatsapp.com/send?phone=0048573255869">
              <FontAwesomeIcon icon={faWhatsappSquare} className="icon"/>     
            </a>
            <a href="mailto:pau.siwko@gmail.com">
              <FontAwesomeIcon icon={faEnvelopeSquare} className="icon"/>
            </a>
            <a href="https://github.com/paulinasiwko">
              <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/paulina-siwko-35a48312b/">
              <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </a>
          </div>    
        </footer>
        </>
    );
}