import React from "react";
import '../styles/ProjectPage.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation  } from "react-router-dom";

export default function ProjectPage() {

    const { state } = useLocation();
    const project = state.project;
    if (!project) {
        return <div>No project details available</div>;
      }

    const image = new URL(project.image, import.meta.url).href
    return (
        <>
        <Header showImg={false} />
        <section className="container">
            <div className="prjDescriptionSide">
                <h1 className="prjTitle">{project.title}</h1>
                
                <p>{project.description}</p>
            </div>
            <div className="demo">
                <img src={image} alt="Screenshot of the deployed application" className="screenshot"/>
                <div className="prjLinks">
                    <a href={project.github} className="singleLink">Github</a>
                    <a href={project.deployed} className="singleLink">Visit application</a>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}
