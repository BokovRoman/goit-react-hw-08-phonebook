import React from 'react';
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';

import styles from './Filter.module.css';


const Filter = ({ value, onChange }) => (
    <label className={styles.label}>
    Find contacts by name
    <input
        className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilterValue(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);