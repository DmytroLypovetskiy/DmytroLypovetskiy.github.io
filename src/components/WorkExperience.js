import React from 'react';
import {Work} from './Work';

export const WorkExperience = (props) => (
    <article className="workExperience">
        <h2>{props.workExperience.title}</h2>
        {props.workExperience.works.map(work => <Work key={work.id} {...work} />)}
    </article>
)
