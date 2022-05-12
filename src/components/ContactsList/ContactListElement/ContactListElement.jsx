import s from './ContactListElement.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactsById } from 'redux/contacts/contactsOperations';
function ContactsListElement({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.listItem}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContactsById(id))}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactsListElement;

ContactsListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
