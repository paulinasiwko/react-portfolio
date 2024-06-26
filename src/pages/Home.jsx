import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import '../styles/Home.css';
import TextAnimation from "../components/TextAnimation";
import Footer from "../components/Footer";

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
            <Header showImg={true}/>
            <div className="introduction">
                <p className="font">Hi, my name is</p>
                <h1 className="font name">Paulina Teske</h1>
                <TextAnimation text='I transform code into awesome user experiences that grab attention and' css='font-appear' timeout1={500} timeout2={60} timeout3={200}/>
                {secondAnimation && <TextAnimation text='keep it.' css='font-appear lighter' timeout1={1000} timeout2={120} timeout3={400}/>}
            </div>
            <Footer />
        </>
    );
}

