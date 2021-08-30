import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { logIn, removeError } from '../../redux/auth/auth-operations';
import { getIsError } from '../../redux/auth/auth-selectors';
import Section from '../../components/Section/Section';
import routes from '../../routes';
import './LoginView.scss';
import fadeTransition from '../../styles/transition/fade.module.css';

class LoginView extends Component {
  state = {
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

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

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
            className="login__alert"
          >
            <Alert.Heading>Something with entered data</Alert.Heading>
            <p>Please check:</p>
            <p>-your password length minimum 7 symbols</p>
            <p>-email format is name@example.com</p>
            <p>-or you can try to register</p>
          </Alert>
        </CSSTransition>
        <Form onSubmit={this.handleSubmit} className="login__form">
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
          <Button className="login__button" type="submit">
            Log In
          </Button>
          <div className="login__wrapper">
            <p>Don't have an account?</p>
            <Link className="login__link" to={routes.register}>
              Sign Up
            </Link>
          </div>
        </Form>
      </Section>
    );
  }
}

LoginView.defaulProps = {
  onLogin: () => null,
  removeError: () => null,
};

LoginView.propTypes = {
  isError: PropTypes.bool,
  onLogin: PropTypes.func,
  removeError: PropTypes.func,
};

const mapStateToProps = state => ({
  isError: getIsError(state),
});

const mapDispatchToProps = {
  onLogin: logIn,
  removeError: removeError,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);