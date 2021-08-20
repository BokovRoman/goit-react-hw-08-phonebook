import React from 'react';
import { connect } from "react-redux";

import PropTypes from "prop-types";
import styles from './ContactList.module.css';

import { removeContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';


const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={styles.list}>
            {contacts.map(({id,name,number})=> (
                    <li key={id} className={styles.item}>
                    <p>{name}: {number}</p>
                    <button className={styles.button} type="button"
                    onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);