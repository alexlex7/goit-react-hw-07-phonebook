import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '425px', margin: '0 auto' }}>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactsList />
    </div>
  );
}
