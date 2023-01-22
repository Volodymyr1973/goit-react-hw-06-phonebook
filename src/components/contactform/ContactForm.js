import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { addSingleContact } from 'redux/singleContactSlice';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  // const singleContact = useSelector(state => state.contact.contact);
  const dispatch = useDispatch();
 

  const handleSubmit = event => {
    event.preventDefault();
  
    const id = nanoid();
    const name = event.target[0].value;
    const number = event.target[1].value;
    dispatch(addSingleContact({id, name, number}))
     
    const contact =
    {
      id: id,
      name: name,
      number: number,
    };
    
    const doubleContact = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (doubleContact) {
      alert(`${contact.name} is already in contacts`);
      event.target[0].value = '';
      event.target[1].value = '';
      return;
    } else dispatch(addContact(contact));
    event.target[0].value = '';
    event.target[1].value = '';
  };


  return (
    <div className={css.form__wrapper}>
      <h1>Phonebook</h1>
      <form className={css.form__body} onSubmit={handleSubmit}>
        <label className={css.form__name}>
          Name
          <input
            className={css.input__name}
            type="text"
            name="name"
            // value={name}
            // onChange={handleAddName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form__number}>
          Number
          <input
            className={css.input__number}
            type="tel"
            name="number"
            // value={number}
            // onChange={handleAddNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.form__button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};


