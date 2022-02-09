import React from "react";
import katie from "../images/katie-zaferes.png";

export default function Card() {
    return (
        <div className="card">
            <img src={katie} alt="katie zaferes" className="card-img" />
            <div className="card-content">
                <small>
                <i class="fas fa-star"></i>
                5.0 
                <span className="grey">(6) - USA</span>
                </small>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}