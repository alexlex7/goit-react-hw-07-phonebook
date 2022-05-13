import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import Loader from './Loader';
import Message from './Message/Message';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const items = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '425px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2 style={{ alignText: 'center' }}>Contacts</h2>
      <Filter />

      {!isLoading && items.length === 0 && <Message />}

      {isLoading && items.length === 0 ? <Loader /> : <ContactsList />}
    </div>
  );
}
