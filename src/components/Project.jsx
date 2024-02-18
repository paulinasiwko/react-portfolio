import React from "react";
import '../styles/Project.css';

export default function Project({img, technologies, cardTitle}) {
    return (
        <>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div className="card singleCard">
                <img src={img} className="card-img-top prj-img" alt="Screenshot of deployed Code Quiz application" />
                <div className="card-body">
                    <h6 className="card-title">{technologies}</h6>
                    <p className="card-text">{cardTitle}</p>
                </div>
            </div>
        </div>
        </>
    );
}