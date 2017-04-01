import React, { Component } from 'react';
import './App.css';
import {Section, Sidebar} from './components';

class App extends Component {
    data = {
        firstName:      'Dmytro',
        lastName:       'Lypovetskiy',
        photoSrc:       '',
        title:          'Software Engineer',
        role:           'Front-end developer',
        overview:       'Professional with more than 12 years of experience in design and development of high quality enterprise online properties. Very motivated and creative personality with solid working attics and ability to work under pressure.',
        workExperience: {
            title:  'Work Experience',
            works: [
                {
                    id:         1,
                    title:      'Senior Software Engineer',
                    company:    'EPAM Systems',
                    date:       'April 2013 - Present',
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
                },
                {
                    id:         2,
                    title:      'Resource manager and Lead Software Engineer',
                    company:    'EPAM Systems',
                    date:       'April 2012 - April 2013',
                    overview:   'Some text',
                    duties:     [
                        'creating the proposals for the customers;',
                        'participating in requirements discussions;',
                        'wireframes estimation and managing of the wireframes development process;',
                        'identifying staffing needs;',
                        'monitoring and tracking team training process;',
                        'collecting information for quarterly reports;',
                        'facilitating employees career and professional development;',
                        'searching for opportunities to utilize bench resources;',
                    ]
                },
                {
                    id:         3,
                    title:      'Lead Software Engineer',
                    company:    'EPAM Systems',
                    date:       'August 2011 - April 2012',
                    overview:   'Some text',
                    duties:     [
                        'developing cross-platform UI for mobile versions of different websites using custom framework;',
                        'supervising 12 team members;',
                        'projects and team load capacity estimation;',
                        'aggregation if team reports;',
                        'participation in requirements discussions with customer;',
                    ]
                },
                {
                    id:         4,
                    title:      'Senior Software Engineer',
                    company:    'Ciklum',
                    date:       'September 2010 - August 2011',
                    overview:   'Some text',
                    duties:     [
                        'Magento E-Commerce custom theme implementation;',
                        'developed UI from PSD using HTML5/CSS3, jQuery/JavaScript;',
                        'created all necessary project documentation;',
                        'code review;',
                        'tasks investigation and prioritization;',
                    ]
                },
                {
                    id:         5,
                    title:      'Mentor of HTML/CSS Department',
                    company:    'PSD2HTML',
                    date:       'March 2009 - September 2010',
                    overview:   'Some text',
                    duties:     [
                        'researched, created and updated documentation for UI developers;',
                        'tasks estimations;',
                        'tech customer support;',
                        'quality review of implemented tickets;',
                        'created carriers plans for html/css developers;',
                        'conducted HTML / CSS trainings for engineering, QA, management and support staff;'
                    ]
                },
                {
                    id:         6,
                    title:      'Lead Developer',
                    company:    'PSD2HTML',
                    date:       'May 2008 - March 2009',
                    overview:   'Some text',
                    duties:     [
                        'supervised a team;',
                        'customer support and troubleshooting;',
                        'managed team work-flow with tasks;',
                        'performed a key role in development with all difficult or VIP projects;',
                        'developed HTML code with all W3C standards;',
                        'assisted Back End developers to the implementation of all front-end parts of applications;'
                    ]
                },
                {
                    id:         7,
                    title:      'Developer',
                    company:    'PSD2HTML',
                    date:       'January 2006 - September 2006',
                    overview:   'Some text',
                    duties:     [
                        'developed HTML/CSS code with all W3C standards;',
                        'implemented email templates for Hotmail, Gmail, AOL, MailChimp, Activecampaign, Campaignmonitor, etc.',
                        'assisted back end developers in the implementation of all front-end parts of applications;'
                    ]
                }
            ]
        },
        education: {
            degree:     'Master\'s degree',
            faculty:    'Computer Technology/Computer Systems Technology',
            university: 'Kharkiv National University of Radio electronics',
            specialty:  'Specialized computer systems'
        },

        languages: [
            {id: 1, name: 'Ukrainian', level: 'Native or bilingual proficiency'},
            {id: 2, name: 'Russian', level: 'Native or bilingual proficiency'},
            {id: 3, name: 'English', level: 'Professional working proficiency'}
        ]


    }

    render() {
        return (
            <div className="App">
                <Sidebar data={this.data} />
                <Section workExperience={this.data.workExperience} />
            </div>
        );
    }
}

export default App;
