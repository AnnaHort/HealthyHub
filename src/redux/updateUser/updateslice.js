import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, setUpdateUserFalse, updateUser } from './updateOperations';
// import { fa } from '@faker-js/faker';


const initialState = {
  updateUser: false,
  user: null,
  isLoading: false,
  error: null,
};

const updateSlice = createSlice({

  name: 'update',
  initialState,
  reducers: {
    setUpdateUserFalse: (state) => {
      state.updateUser = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.fulfilled, (state) => {
        state.updateUser = true;
      })
      .addCase(setUpdateUserFalse, (state) => {
        state.updateUser = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
  },
});


export const updateReducer = updateSlice.reducer;
