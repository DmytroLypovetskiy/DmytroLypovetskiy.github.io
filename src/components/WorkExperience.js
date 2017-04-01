import React from 'react';
import {Work} from './Work';

export const WorkExperience = (props) => {
    return (
        <article className="workExperience">
            <h2>{props.workExperience.title}</h2>
            {props.workExperience.works.map(work => <Work key={work.id} {...work} />)}
        </article>
    )
};