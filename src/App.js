import React, { Component } from 'react';
import './App.css';
import {Section, Sidebar} from './components';

class App extends Component {
    data = {
        firstName:  'Dmytro',
        lastName:   'Lypovetskiy',
        photoSrc:   '',
        title:      'Software Engineer',
        role:       'Front-end developer',
        overview:   'Professional with more than 12 years of experience in design and development of high quality enterprise online properties. Very motivated and creative personality with solid working attics and ability to work under pressure.',
        workExperience: [
            {
                id:         1,
                title:      'Senior Software Engineer',
                company:    'EPAM Systems',
                date:       'April 2013 – Present',
                overview:   'Some text',
                duties:     [
                    'working with social media REST APIs (Facebook, Twitter, Google+, etc.);',
                    'desktop and mobile micro sites implementation from PSD mock-ups using XHTML, HTML5/CSS3, jQuery/JavaScript and AdobeCQ CMS;',
                    'creating HTML/CSS/JS templates, widgets and components;',
                    'improving and optimization existing functionality;',
                    'new features and best practices research and development;',
                    'implementation Omniture - an online marketing and web analytics system;',
                    'working closely with design and back-end teams to analyze needs and requirements;',
                    'design reviewing;',
                    'integration new custom web player;',
                ]

            }
        ]
    }

    render() {
        return (
            <div className="App">
                <Sidebar data={this.data} />
                <Section />
            </div>
        );
    }
}

export default App;
