import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, displayConvo }) => {
  return (
    <div>
      {contacts.map(contact => 
        <Contact key={contact} name={contact} displayConvo={displayConvo} />
      )}
    </div>
  )
}

export default ContactList;
