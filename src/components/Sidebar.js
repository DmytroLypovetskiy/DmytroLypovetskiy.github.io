import React from 'react';
import photo from '../img/photo.jpg';
import triangle from '../img/triangle.svg';
import triangleLeft from '../img/triangle-left.svg';
import triangleRight from '../img/triangle-right.svg';
import {Education, Languages, Contacts, Intro} from '../components';

export const Sidebar = (props) => (
    <aside className="sidebar">
        <h1>{props.data.firstName} <small>{props.data.lastName}</small></h1>
        <div className="photo">
            <img src={triangle} className="triangle-svg" alt="" />
            <img src={photo} className="dl-photo" alt={props.data.firstName + " " + props.data.lastName} />
            <img src={triangleLeft} className="triangle-left-svg" alt="" />
            <img src={triangleRight} className="triangle-right-svg" alt="" />
        </div>
        <Intro {...props} />
        <Education education={props.data.education} />
        <Languages languages={props.data.languages} />
        <Contacts contacts={props.data.contacts} />

    </aside>
)