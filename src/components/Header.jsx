import React from 'react';
import '../styles/Header.css';
import IMAGES from '../assets/img/Images';
import { Link } from "react-router-dom";

export default function Header({showImg}) {


    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              { showImg && <img src={IMAGES.meImg} alt="Photo of me" className="img-me-nav" /> }
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="nav-link"><Link  to={`/`}>Main</Link></span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link"><Link  to={`/about`}>About me</Link></span>
                  </li>
                  <li className="nav-item">
                  <span className="nav-link"><Link  to={`/projects`}>Projects</Link></span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link"><Link  to={`/skills`}>Skills</Link></span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link"><Link  to={`/contact`}>Contact me</Link></span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    );
}