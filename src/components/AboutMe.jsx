import React from "react";
import '../styles/AboutMe.css';
import IMAGES from "../assets/img/Images";
import Footer from "./Footer";
import HeaderNoImg from "./HeaderNoImg";

export default function AboutMe() {
    return (
        <>
        <HeaderNoImg />
        <section className="container aboutMeLayout">
            <div className="meDescription">
                <h1 className="heading">about me</h1>
                <p>
                    Greetings! I'm a front-end developer with a relentless 
                    passion for turning ideas into engaging digital experiences. 
                    My journey in programming began with a thirst for knowledge and 
                    a determination to master the intricacies of web development. 
                    What fuels me is not just the end result, but the continuous process 
                    of learning and refining my coding skills.
                </p>
                <p>
                    Beyond the realm of programming, my interests are diverse. 
                    I am fascinated by foreign languages, finding joy in decoding linguistic 
                    nuances and cultural intricacies. This passion extends beyond the screen, 
                    as I seek out opportunities to immerse myself in different cultures through travel. 
                    These experiences not only broaden my perspective but also inspire 
                    creative solutions in my coding endeavors.
                </p>
                <p>
                    In essence, I am not just a coder; I am a curious mind on a perpetual quest 
                    for knowledge and growth. Join me on this exciting journey where technology, 
                    creativity, and a love for languages converge.
                </p>
            </div>
            <img src={IMAGES.meImg} alt="Photo of me" className="aboutMeImg" />
        </section>
        <Footer />
        </>
    );
}