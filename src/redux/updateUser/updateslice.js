import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, setUpdateUserFalse, updateUser } from './updateOperations';


const initialState = {
  updateUser: false,
  user: null,
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
      });
  },
});


export const updateReducer = updateSlice.reducer;
