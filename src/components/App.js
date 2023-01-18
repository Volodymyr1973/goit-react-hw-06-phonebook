import { ContactForm } from './contactform/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactlist/ContactList';
import { ContactItem } from './contactitem/ContactItem';
import css from './App.module.css';

export const App = () => {
  
  return (
    <div className={css.phonebook__wrapper}>
      <ContactForm/>

      <div>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList>
          <ContactItem />
        </ContactList>
      </div>
    </div>
  );
};

