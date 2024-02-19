import React from "react";
import IMAGES from "../assets/img/Images";
import HeaderNoImg from "./HeaderNoImg";
import Footer from "./Footer";
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
    return (
        <>
        <HeaderNoImg />
        <section className="contactContainer">
            <div>
                <h1 className="contactHeading">contact me</h1>
                <h5>Get in touch with me via social media or email.</h5>

                <div className="socialMedia">
                    <a href="https://api.whatsapp.com/send?phone=0048573255869" className="link whatsapp">
                        <FontAwesomeIcon icon={faWhatsappSquare} className="iconContact"/>   
                        <p className="socialName">WhatsApp</p>  
                    </a>

                    <a href="mailto:pau.siwko@gmail.com" className="link gmail">
                        <FontAwesomeIcon icon={faEnvelopeSquare} className="iconContact"/>
                        <p>Gmail</p>
                    </a>
                </div>

                <div className="socialMedia">
                    <a href="https://github.com/paulinasiwko" className="link github">
                        <FontAwesomeIcon icon={faGithubSquare} className="iconContact"/>
                        <p>Github</p>
                    </a>
                    <a href="https://www.linkedin.com/in/paulina-siwko-35a48312b/" className="link">
                        <FontAwesomeIcon icon={faLinkedin} className="iconContact"/>
                        <p>Linkedin</p>
                    </a>
                </div>
            </div>

            <img src={IMAGES.meImg} alt="An image of me" className="contactMeImg" />
        </section>
        <Footer />
        </>
    );
}