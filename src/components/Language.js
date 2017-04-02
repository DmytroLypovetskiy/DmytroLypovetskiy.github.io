import React from 'react';

export const Language = (props) => (
    <li>
        {props.name} <span className="note">({props.level})</span>
    </li>
)
