import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/AddContactRequest');
export const addContactSuccess = createAction('contacts/AddContactSuccess');
export const addContactError = createAction('contacts/AddContactError');

export const removeContactRequest = createAction('contacts/RemoveContactRequest');
export const removeContactSuccess = createAction('contacts/RemoveContactSuccess');
export const removeContactError = createAction('contacts/RemoveContactError');

export const changeFilter = createAction('contacts/changeFilter');