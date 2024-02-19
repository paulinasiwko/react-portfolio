import React from "react";
import '../styles/Skills.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faCss3Alt, faHtml5, faBootstrap, faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
    return (
        <>
        <Header />
        <div className="skillsContainer">
            <h1 className="skillsIntroduction">i know</h1>
            <div className="change">
                <div><div>javascript</div></div>
                <div><div>css</div></div>
                <div><div>html</div></div>
                <div><div>bootstrap</div></div>
                <div><div>react</div></div>
                <div><div>git</div></div>
                <div><div>typescript</div></div>
                <div><div>jquery</div></div>
            </div>
        </div>
        <section className="technologiesSection">
            <FontAwesomeIcon icon={faSquareJs} className="skillIcon"/>
            <FontAwesomeIcon icon={faCss3Alt} className="skillIcon"/>
            <FontAwesomeIcon icon={faHtml5} className="skillIcon"/>
            <FontAwesomeIcon icon={faBootstrap} className="skillIcon"/>
            <FontAwesomeIcon icon={faReact} className="skillIcon"/>
            <FontAwesomeIcon icon={faGitAlt} className="skillIcon"/>
        </section>
        <Footer />
        </>
    );
}
