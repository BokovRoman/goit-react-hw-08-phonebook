import axios from 'axios';
import * as actions from './contacts-actions';

export const fetchContactsRequest = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.removeContactError(error.message));
  }

  //   axios
  //     .get('/contacts')
  //     .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
  //     .catch(error => actions.fetchContactsError(error));
};

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }

  //   axios
  //     .post('/contacts', contact)
  //     .then(({ data }) => dispatch(actions.addContactSuccess(data)))
  //     .catch(error => dispatch(actions.addContactError(error)));
};

export const removeContact = id => async dispatch => {
  dispatch(actions.removeContactRequest());

  try {
    const response = await axios.delete(`/contacts/${id}`);

    if (response.status === 200) {
      dispatch(actions.removeContactSuccess(id));
    }
  } catch (error) {
    dispatch(actions.removeContactError(error.message));
  }

  //   axios
  //     .delete(`/contacts/${id}`)
  //     .then(() => dispatch(actions.removeContactSuccess(id)))
  //     .catch(error => dispatch(actions.removeContactError(error)));
};