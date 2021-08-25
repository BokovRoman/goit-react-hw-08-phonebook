import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

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
      '0 0 20px #54f0fa, 0 0 30px #54f0fa, 0 0 40px #54f0fa, 3px -1px 1px #2a2a2a',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to={routes.home}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Main
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);