import React from "react";
import IMAGES from "../assets/img/Images";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
    return (
        <>
        <Header showImg={false} />

        <div className="contactContainer">
            <h1 className="contactHeading">contact me</h1>
        </div>
        <section className="socialMedia">
            <a href="https://api.whatsapp.com/send?phone=0048573255869" className="link">
                <FontAwesomeIcon icon={faWhatsappSquare} className="iconContact"/>   
            </a>
            <a href="mailto:pau.siwko@gmail.com" className="link">
                <FontAwesomeIcon icon={faEnvelopeSquare} className="iconContact"/>
            </a>
            <a href="https://github.com/paulinasiwko" className="link">
                <FontAwesomeIcon icon={faGithubSquare} className="iconContact"/>
            </a>
            <a href="https://www.linkedin.com/in/paulina-siwko-35a48312b/" className="link">
                <FontAwesomeIcon icon={faLinkedin} className="iconContact"/>
            </a>
        </section>
        <Footer />
        </>
    );
}