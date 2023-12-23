// Селектор для отримання користувача
export const selectUser = (state) => state.updateReducer.user;

// Селектор для отримання статусу оновлення користувача
export const selectUpdateUserStatus = (state) => state.updateReducer.updateUser;