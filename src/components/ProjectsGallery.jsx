import React from "react";
import Header from "./Header";
import Project from "./Project";
import IMAGES from "../assets/img/Images";

export default function ProjectsGallery() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="row">
                <Project img={IMAGES.codeQuizImg} cardTitle='Friends Code Quiz'/>
                <Project img={IMAGES.workdaySchedulerImg} cardTitle='Work Day Scheduler'/>
                <Project img={IMAGES.weatherDashboardImg} cardTitle='Weather Dashboard'/>
                <Project img={IMAGES.passwordGeneratorImg} cardTitle='Password Generator'/>
                <Project img={IMAGES.curiocityImg} cardTitle='Curiocity'/>
                <Project img={IMAGES.teamProfileGeneratorImg} cardTitle='Team Profile Generator'/>
            </div>
        </div>
        </>
    );
}