import React from "react";


export default function Card(props) {
    const experiences = props.data;
        
    const listExperiences = experiences.map( experience => 
        <div className="card" key={experience.id}>
            {experience.openSpots ? <div className="card-badge">ONLINE</div> : <div className="card-badge">SOLD OUT</div>}
            <img src={`../images/${experience.coverImg}`} alt={experience.coverImg} className="card-img" />
            <div className="card-content">
                <small>
                <i class="fas fa-star"></i>
                {experience.stats.rating}
                <span className="grey">({experience.stats.reviewCount}) - {experience.location}</span>
                </small>
                <p>{experience.title}</p>
                <p><strong>From ${experience.price}</strong> / person</p>
            </div>
        </div> )
    return (
        listExperiences
    )
}