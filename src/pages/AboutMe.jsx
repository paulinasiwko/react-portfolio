import React, { useState } from "react";
import '../styles/AboutMe.css';
import IMAGES from "../assets/img/Images";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextAnimation from "../components/TextAnimation";

export default function AboutMe() {
    const [imgIsClicked, setImgIsClicked] = useState(false);

    function handleImgClick() {
        setImgIsClicked(true);
    }

    return (
        <>
        <Header showImg={false} />
        <section className="container aboutMeLayout">
            <div className="meDescription">
                <h1 className="heading">about me</h1>
                <p className="first">
                    Hey there! Welcome to my digital world! I'm a front-end enthusiast working 
                    to turn ordinary ideas into captivating digital experiences. My coding journey 
                    began with curiosity and a strong dedication to mastering web development. 
                    It's not just about the end result; I enjoy constantly improving my coding skills.
                </p>
                <TextAnimation text='But wait, there is more to me than just coding! I love exploring foreign languages, decoding linguistic mysteries, and discovering different cultures through travel. These adventures not only broaden my horizons but also inspire creative solutions in my coding projects.' css='about' timeout1={500} timeout2={60} timeout3={200}/>
                <TextAnimation text='In essence, I am not just a coder; I am a curious learner on a journey of knowledge and growth. Come join me on this exciting adventure where technology, creativity, and a passion for languages come together in a magical symphony!' css='about' timeout1={500} timeout2={60} timeout3={200}/>
            </div>
            {imgIsClicked ? <img src={IMAGES.meComic} alt="Photo of me with a comic speech bubble with text - Please, don't click on me, it hurts!" className="aboutMeImg" /> : <img src={IMAGES.meImg} alt="Photo of me" className="aboutMeImg notClicked" onClick={handleImgClick} /> }        
        </section>
        <Footer />
        </>
    );
}