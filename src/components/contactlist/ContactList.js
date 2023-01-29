import React from 'react';
import css from './ContactList.module.css';
import { ContactItem } from 'components/contactitem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(getContacts); 
   const filter = useSelector(getFilter)

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

