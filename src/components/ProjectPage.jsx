import React from "react";
import '../styles/ProjectPage.css';
import IMAGES from "../assets/img/Images";
import Footer from "./Footer";
import HeaderNoImg from "./HeaderNoImg";
import Project from "./Project";

export default function ProjectPage() {
    return (
        <>
        <HeaderNoImg />
        <section className="container">
            <div className="prjDescriptionSide">
                <h1 className="prjTitle">friends code quiz</h1>
                <p>A timed Friends Quiz with multiple-choice questions.</p>
                <p>A dataset is composed of an array with questions and answers. For each question only one answer is correct.</p>
                <p>
                    I am using an even listener on a button to start the quiz and the timer. 
                    If the user choose a correct answer, the game will show another question. 
                    If the user choose an incorrect answer, 10 seconds are substracted from the clock. 
                    The quiz is over when all questions are answered or the timer reaches 0. 
                    When the quiz is over, the user can enter their initials. After clicking on 'Submit' 
                    button, the user will see all the highscores. I am using local storage to store all 
                    user's initials and scores. After clicking on 'Clear Highscores' button, 
                    local storage is cleared.
                </p>
            </div>
            <img src={IMAGES.codeQuizImg} alt="Screenshot of the deployed application" className="screenshot"/>
        </section>
        <Footer />
        </>
    );
}