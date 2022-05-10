import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/contactsSlice';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input type="text" value={filter} name="filter" onChange={handleChange} />
    </label>
  );
}

export default Filter;
