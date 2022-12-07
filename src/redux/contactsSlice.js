import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, actions) {
      state.push(actions.payload);
    },
    deleteContact(state, actions) {
      // if (state.length === 1) {
      //   localStorage.removeItem('contacts');
      // }
      return state.filter(contact => contact.id !== actions.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
