import React from 'react';
import {WorkExperience} from './WorkExperience';

export const Section = (props) => (
    <section className="content">
        <WorkExperience {...props} />
    </section>
)