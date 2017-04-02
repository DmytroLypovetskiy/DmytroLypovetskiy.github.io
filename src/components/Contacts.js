import React from 'react';
import {Contact} from './Contact'

export const Contacts = (props) => (
    <div className="contacts">
        <h4>{props.contacts.title}</h4>
        <ul>
            {props.contacts.list.map(contact => <Contact key={contact.id} {...contact} /> )}
        </ul>
    </div>
)
