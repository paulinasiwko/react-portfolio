import React from 'react';
import image from '../assets/img/me.jpg';
import '../styles/Header.css';

export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={image} alt="Photo of me" className="img-me-nav" data-bs-toggle="modal" data-bs-target="#modal" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#about-me">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#work">Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact-me">Contact Me</a>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="./assets/Paulina-Siwko-Resume.pdf" download="Paulina-Siwko-Resume">Resume</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    );
}