import React from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import IMAGES from "../assets/img/Images";
import '../styles/ProjectsGallery.css';
import Footer from "../components/Footer";

export default function ProjectsGallery() {
    return (
        <>
        <Header />
        <div className="container projects-gallery">
            <div className="row">
                <Project img={IMAGES.codeQuizImg} technologies='JavaScript, HTML, CSS' cardTitle='Friends Code Quiz'/>
                <Project img={IMAGES.workdaySchedulerImg} technologies='jQuery, Day.js, Javascript, HTML, CSS' cardTitle='Work Day Scheduler'/>
                <Project img={IMAGES.weatherDashboardImg} technologies='jQuery, Bootstrap' cardTitle='Weather Dashboard'/>
                <Project img={IMAGES.passwordGeneratorImg} technologies='JavaScript' cardTitle='Password Generator'/>
                <Project img={IMAGES.curiocityImg} technologies='JavaScript, Server-Side APIs' cardTitle='Curiocity'/>
                <Project img={IMAGES.teamProfileGeneratorImg} technologies='IDK' cardTitle='Team Profile Generator'/>
            </div>
        </div>
        <Footer />
        </>
    );
}