import React from "react";
import hero from "../images/photo-grid.png";

export default function MainContent() {
    return (
        <main className="container-main">
            <img src={hero} alt="Hero" id="hero"/>
            <div className="main-content">
                <h2 className="main-title">Online Experiences</h2>
                <p className="main-text">
                    Join unique interactive activities 
                    led by one-of-a-kind hosts—all without 
                    leaving home.
                </p>
            </div>
        </main>
    )
}