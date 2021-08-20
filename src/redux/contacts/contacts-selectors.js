  
import { createSelector } from '@reduxjs/toolkit';
export const getIsLoading = state => state.contacts.loading;
export const getFilterValue = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  },
);