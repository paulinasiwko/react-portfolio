import React, { useEffect, useState } from "react";
import Header from "./Header";
import '../styles/Home.css';
import TextAnimation from "./TextAnimation";

export default function Home() {
    const [secondAnimation, setSecondAnimation] = useState(false);

    useEffect(() => {
        const time = setTimeout(() => {
            setSecondAnimation(true);
        }, 4900);

        return () => clearTimeout(time);
    }, []);

    return (
        <>
            <Header />
            <div className="introduction">
                <p className="font">Hi, my name is</p>
                <h1 className="font name">Paulina Siwko</h1>
                <TextAnimation text='I transform code into awesome user experiences that grab attention and' css='font-appear'/>
                {secondAnimation && <TextAnimation text='keep it.' css='font-appear lighter'/>}
                <h6 className="font">Front-end developer with a relentless passion for turning ideas into engaging digital experiences.</h6>
                {/* <button>Check out my projects!</button> */}
            </div>
        </>
    );
}