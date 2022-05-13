import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/contacts/contactsSlice';
import { FormControl, InputGroup } from 'react-bootstrap';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          Find contact by name
        </InputGroup.Text>
        <FormControl
          id="basic-url"
          aria-describedby="basic-addon3"
          value={filter}
          name="filter"
          onChange={handleChange}
        />
      </InputGroup>
    </>
  );
}

export default Filter;
