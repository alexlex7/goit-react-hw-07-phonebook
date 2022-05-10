import { createSlice } from '@reduxjs/toolkit';

const initialStateItems = () => {
  const contacts = JSON.parse(localStorage.getItem('contacts'));
  return contacts ? contacts : [];
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialStateItems(),
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterChange } =
  contactsSlice.actions;
