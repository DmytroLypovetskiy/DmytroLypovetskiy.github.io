import React from 'react';
import {Duty} from './Duty';

export const Work = (props) => (
    <dl>
        <dt>
            <h4>{props.title}</h4>
            <h5>{props.company}</h5>
            <p className="date">{props.date}</p>
        </dt>
        <dd>
            <ul>
                {props.duties.map( (duty, index) => <Duty key={index} duty={duty} />)}
            </ul>
        </dd>
    </dl>
)
