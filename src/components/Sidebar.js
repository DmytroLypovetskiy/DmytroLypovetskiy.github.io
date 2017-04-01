import React from 'react';
import photo from '../img/photo.jpg';
import triangle from '../img/triangle.svg';
import {Education} from '../components';

export const Sidebar = (props) => (
    <aside className="sidebar">
        <h1>{props.data.firstName} <small>{props.data.lastName}</small></h1>
        <div className="photo">
            <img src={triangle} className="triangle-svg" alt="" />
            <img src={photo} className="dl-photo" alt={props.data.firstName + " " + props.data.lastName} />

        </div>
        <h2>{props.data.title}</h2>
        <h3>{props.data.role}</h3>
        <p>{props.data.overview}</p>


        <Education />


    </aside>
)