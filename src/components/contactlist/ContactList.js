import React from 'react';
import css from './ContactList.module.css';
import { ContactItem } from 'components/contactitem/ContactItem';
import { useSelector } from 'react-redux';


export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts); 
   const filter = useSelector(state=> state.filter.filter)
 
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.contact__list}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <ContactItem
              contact={contact}
            
      
            />
          ))}
      </ul>
    </>
  );
};

