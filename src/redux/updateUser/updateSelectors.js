// Селектор для отримання користувача
export const selectUser = (state) => state.updateReducer.user;

// Селектор для отримання статусу оновлення користувача
export const selectUpdateUserStatus = (state) => state.updateReducer.updateUser;

// Селектор для отримання цілей користувача
export const selectUserGoals = (state) => state.updateReducer.user?.goal || '';

export const selectIsLoadingUpdate = (state) => state.updateReducer.isLoading;