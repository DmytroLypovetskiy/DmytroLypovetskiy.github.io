import React from 'react';
import {Language} from './Language'

export const Languages = (props) => (
    <div className="languages">
        <h4>{props.languages.title}</h4>
        <ul>
            {props.languages.list.map(language => <Language key={language.id} {...language} /> )}
        </ul>
    </div>
)
