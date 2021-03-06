import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { addContact } from 'redux/contacts/contactsSlice';
// якщо видалити імпорт addContact буде помилка

import { postNewContact } from 'redux/contacts/contactsOperations';

import s from './ContactForm.module.css';
import { Button, Form, Spinner } from 'react-bootstrap';

const initialState = { name: '', number: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const items = useSelector(state => state.contacts.items);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [items]);

  const dispatch = useDispatch();

  const handleChange = e => {
    const eventName = e.target.getAttribute('name');
    setFormData(state => ({ ...state, [eventName]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;

    if (items.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setIsLoading(true);
    dispatch(postNewContact({ name, number }));
    setFormData(initialState);
  };
  return (
    <Form onSubmit={handleSubmit} className={s.formContact}>
      <Form.Group className="mb-3" controlId="formBasicName">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={formData.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        {/* <Form.Label>Phone number</Form.Label> */}
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          name="number"
          value={formData.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

      <Button className={s.deleteBtn} type="submit">
        {isLoading && (
          <Spinner
            as="span"
            animation="border"
            role="status"
            variant="danger"
            aria-hidden="true"
            size="sm"
          />
        )}
        Add contact
      </Button>
    </Form>
  );
}
