import React from 'react';
import PropTypes from "prop-types";
import styles from './Section.module.css';


const Section = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.text}>{title}
            </h2>
            {children}
        </div>
    );
};

Section.protoTypes = {
    title:PropTypes.string.isRequired,
}

export default Section;