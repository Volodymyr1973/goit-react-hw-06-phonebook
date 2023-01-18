import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact__item} key={contact.id}>
      <span className={css.contact__name}>{contact.name}</span>
      <span className={css.contact__number}>{contact.number}</span>
      <button
        className={css.contact__button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propType = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
