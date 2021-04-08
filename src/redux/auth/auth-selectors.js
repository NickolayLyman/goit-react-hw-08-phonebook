const getIsSignIn = state => state.auth.isSignedIn;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;
const getIsAuthLoading = state => state.auth.isAuthLoading;
const getErrorMessage = state => state.auth.error;
const getIsFetchingUser = state => state.auth.isFetchingUser;

const authSelectors = {
  getIsSignIn,
  getUsername,
  getUserEmail,
  getToken,
  getIsAuthLoading,
  getErrorMessage,
  getIsFetchingUser,
};

export default authSelectors;
