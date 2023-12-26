export const selectUser = (state) => state.authReducer.user;
export const selectToken = (state) => state.authReducer.token;
const selectIsLoggedIn = (state) => state.authReducer.isLoggedIn;
export const selectIsRefreshing = (state) => state.authReducer.isRefreshing;
export const selectIsLoading = (state) => state.authReducer.isLoading;

export default selectIsLoggedIn;
