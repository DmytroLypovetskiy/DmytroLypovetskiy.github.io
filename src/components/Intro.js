import React from 'react';

export const Intro = (props) => (
    <div className="intro">
        <h2>{props.data.title}</h2>
        <h3>{props.data.role}</h3>
        <p>{props.data.overview}</p>
    </div>
)