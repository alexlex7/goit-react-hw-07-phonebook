import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { addContact } from 'redux/contacts/contactsSlice';
// якщо видалити імпорт addContact буде помилка

import { postNewContact } from 'redux/contacts/contactsOperations';

import s from './ContactForm.module.css';

const initialState = { name: '', number: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const eventName = e.target.getAttribute('name');
    setFormData(state => ({ ...state, [eventName]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(postNewContact({ name, number }));
  };
  return (
    <form onSubmit={handleSubmit} className={s.formContact}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={formData.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={formData.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
