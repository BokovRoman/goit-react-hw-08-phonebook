import React, { Component } from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from './components/Loader/Loader';
import Section from './components/Section/Section';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';
import { getIsLoading } from './redux/common/common-selectors';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Section>
        {isLoading && <Loader />}

        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);