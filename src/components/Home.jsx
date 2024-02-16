import React from "react";
import Header from "./Header";
import '../styles/Home.css';

export default function Home() {
    return (
        <>
            <Header />
            <p className="introduction">Hi, my name is</p>
            <h1>Paulina Siwko</h1>
            <h5 className="introduction">Front End Developer</h5>
        </>
    );
}