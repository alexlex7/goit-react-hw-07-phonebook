import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactsById,
  fetchContacts,
  postNewContact,
} from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
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

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },

    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [deleteContactsById.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [deleteContactsById.fulfilled]: state => {
      state.isLoading = false;
    },
    [deleteContactsById.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [postNewContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [postNewContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [postNewContact.rejected]: state => {
      state.isLoading = true;
      state.error = null;
    },
  },
});

export const { addContact, deleteContact, filterChange } =
  contactsSlice.actions;
