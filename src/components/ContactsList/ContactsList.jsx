import s from './ContactsList.module.css';
import ContactsListElement from './ContactListElement';
import { useSelector } from 'react-redux';

function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListElement key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

export default ContactsList;
