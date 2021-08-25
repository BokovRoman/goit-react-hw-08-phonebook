import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontSize: '20px',
    color: '#2a2a2a',
  },
  activeLink: {
    color: '#fff',
    textShadow:
      '-1px 6px 15px rgba(84,240,250,0.76), 5px 5px 1px rgba(100,240,250,0.4)',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.register}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Sign Up
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Log In
    </NavLink>
  </div>
);

export default AuthNav;