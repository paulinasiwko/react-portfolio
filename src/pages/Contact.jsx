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
        <section className="contactContainer">
            <div className="allContactInfo">
                <h1 className="contactHeading">contact me</h1>
                <h5 className="paragraph">Get in touch with me via social media or email.</h5>

                <div className="socialMedia">
                    <a href="https://api.whatsapp.com/send?phone=0048573255869" className="link whatsapp">
                        <FontAwesomeIcon icon={faWhatsappSquare} className="iconContact"/>   
                        <p className="socialName">WhatsApp</p>  
                    </a>

                    <a href="mailto:pau.siwko@gmail.com" className="link gmail">
                        <FontAwesomeIcon icon={faEnvelopeSquare} className="iconContact"/>
                        <p className="socialName">Gmail</p>
                    </a>
                    <a href="https://github.com/paulinasiwko" className="link github">
                        <FontAwesomeIcon icon={faGithubSquare} className="iconContact"/>
                        <p className="socialName">Github</p>
                    </a>
                    <a href="https://www.linkedin.com/in/paulina-siwko-35a48312b/" className="link linkedin">
                        <FontAwesomeIcon icon={faLinkedin} className="iconContact"/>
                        <p className="socialName">LinkedIn</p>
                    </a>
                </div>
            </div>

            <img src={IMAGES.meImg} alt="An image of me" className="contactMeImg" />
        </section>
        <Footer />
        </>
    );
}