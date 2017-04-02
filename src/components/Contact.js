import React from 'react';

export const Contact = (props) => (
    <li className={props.name}>
        <a href={(props.name === 'email' ? 'mailto:' : 'tel:') + props.info}>{props.info}</a>
    </li>
)
