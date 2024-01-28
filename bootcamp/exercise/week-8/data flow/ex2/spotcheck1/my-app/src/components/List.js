import React from 'react';
import Contact from './Contact';

const List = ({ contacts, displayConvo }) => {
  return (
    <div>
      {contacts.map(contact => <Contact key={contact} name={contact} displayConvo={displayConvo} /> )}   
    </div>
  )
}

export default List;
