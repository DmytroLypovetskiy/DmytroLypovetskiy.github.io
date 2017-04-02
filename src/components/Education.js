import React from 'react';

export const Education = (props) => (
    <div className="education">
        <h4>{props.education.title}</h4>
        <h5>{props.education.university}</h5>
        <p className="date">{props.education.date}</p>
        <p>{props.education.degree}, {props.education.faculty}</p>
        <p>{props.education.specialty}</p>
    </div>
)
