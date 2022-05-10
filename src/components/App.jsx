import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

import React from 'react';

export default function App() {
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
