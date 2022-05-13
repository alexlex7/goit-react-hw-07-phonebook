import s from './ContactListElement.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactsById } from 'redux/contacts/contactsOperations';
import { Button, ListGroupItem, Spinner } from 'react-bootstrap';
import { useState } from 'react';
function ContactsListElement({ name, number, id }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ListGroupItem className={s.listItem}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <Button
        className={s.deleteBtn}
        type="button"
        onClick={() => {
          dispatch(deleteContactsById(id));
          setIsLoading(true);
        }}
      >
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
        Delete
      </Button>
    </ListGroupItem>
  );
}

export default ContactsListElement;

ContactsListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
