import React from "react";
import '../styles/Project.css';

export default function Project({img, cardTitle}) {
    return (
        <>
        <div className="col-lg-4 mb-4 cardStyling">
            <div className="card singleCard">
                <img src={img} className="card-img-top prj-img" alt="Screenshot of deployed Code Quiz application" />
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        </>
    );
}