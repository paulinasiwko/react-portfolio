import React from "react";
import Header from "./Header";
import '../styles/Home.css';
import TextAnimation from "./TextAnimation";

export default function Home() {
    return (
        <>
            <Header />
            <div className="introduction">
                <p className="font">Hi, my name is</p>
                <h1 className="font name">Paulina Siwko</h1>
                <TextAnimation text='I transform code into awesome user experiences that grab attention and keep it.'/>
                <h6 className="font">Front-end developer with a relentless passion for turning ideas into engaging digital experiences.</h6>
                {/* <button>Check out my projects!</button> */}
            </div>
        </>
    );
}