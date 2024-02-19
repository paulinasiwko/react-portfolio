import React from 'react';
import '../styles/HeaderNoImg.css';

export default function HeaderNoImg() {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Contact Me</a>
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