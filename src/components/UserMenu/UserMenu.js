import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './UserMenu.scss';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from './user.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt={name} width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button className="user-menu" type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

UserMenu.defaultProps = {
  avatar: defaultAvatar,
  onLogout: () => null,
};

UserMenu.propTypes = {
  avatar: PropTypes.any,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func,
};

const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);