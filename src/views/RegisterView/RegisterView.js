import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import './RegisterView.scss';

import { register, removeError } from '../../redux/auth/auth-operations';
import { getIsError } from '../../redux/auth/auth-selectors';
import Section from '../../components/Section/Section';
import fadeTransition from '../../styles/transition/fade.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  componentDidMount() {
    this.props.removeError();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Section>
        <CSSTransition
          in={this.props.isError}
          timeout={200}
          classNames={fadeTransition}
          unmountOnExit
        >
          <Alert
            dismissible
            variant="info"
            onClose={() => this.props.removeError()}
            className="register__alert"
          >
            <Alert.Heading>Something with entered data</Alert.Heading>
            <p>Please check:</p>
            <p>-your password length minimum 7 symbols</p>
            <p>-email format is name@example.com</p>
            <p>-your email hasn't been registered in phonebook yet</p>
          </Alert>
        </CSSTransition>

        <Form onSubmit={this.handleSubmit} className="register__form">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={this.handleChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              aria-describedby="passwordHelpBlock"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must minimum 7 characters long.
            </Form.Text>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              name="name"
              type="text"
              placeholder="name"
              value={name}
              onChange={this.handleChange}
            />
          </FloatingLabel>

          <Button className="register__button" type="submit">
            Sign Up
          </Button>
        </Form>
      </Section>
    );
  }
}

RegisterView.propTypes = {
  isError: PropTypes.bool,
  onRegister: PropTypes.func,
  removeError: PropTypes.func,
};

const mapStateToProps = state => ({
  isError: getIsError(state),
});

const mapDispatchToProps = {
  onRegister: register,
  removeError: removeError,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);