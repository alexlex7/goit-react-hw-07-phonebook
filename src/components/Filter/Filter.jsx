import s from './Filter.module.css';
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
      {/* <Form.Label>Find contacts by name</Form.Label> */}
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

    // <label className={s.filterLabel}>
    //   Find contacts by name
    //   <input type="text" value={filter} name="filter" onChange={handleChange} />
    // </label>
  );
}

export default Filter;
