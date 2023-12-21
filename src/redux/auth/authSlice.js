import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurentUser.rejected, (state, action) => {
        state.token = null;
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      ;
  },
});

export const authReducer = authSlice.reducer;
