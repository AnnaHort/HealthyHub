export const selectUser = state => state.authReducer.user;
export const selectToken = state => state.authReducer.token;
export const selectIsLoggedIn = state => state.authReducer.isLoggedIn;
export const selectIsRefreshing = state => state.authReducer.isRefreshing;