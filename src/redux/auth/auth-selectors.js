export const getIsAuthenticated = state => state.auth.isAuthenticated;
export const getUserName = state => state.auth.user.name;
export const getIsError = state => Boolean(state.auth.error);