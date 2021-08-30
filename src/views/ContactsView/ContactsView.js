import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ContactsView.scss';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { fetchContactsRequest } from '../../redux/contacts/contacts-operations';

class ContactsView extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Section>
        <div className="contacts-wrapper">
          <div className="contacts__add-container">
            <p className="contacts__add-hint">
              Enter name and phone number to add a new contact
            </p>
            <ContactForm />
          </div>
          <div className="contacts__list-container">
            <Filter />
            <ContactList />
          </div>
        </div>
      </Section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsRequest()),
});

export default connect(null, mapDispatchToProps)(ContactsView);