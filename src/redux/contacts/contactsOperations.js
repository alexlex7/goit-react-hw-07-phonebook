import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact } from './contactsSlice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://627778892f94a1d7060e703c.mockapi.io/contacts'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactsById = createAsyncThunk(
  'contacts/deleteContactsById',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://627778892f94a1d7060e703c.mockapi.io/contacts/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      dispatch(deleteContact(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postNewContact = createAsyncThunk(
  'contacts/postNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://627778892f94a1d7060e703c.mockapi.io/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(newContact),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add contact');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
