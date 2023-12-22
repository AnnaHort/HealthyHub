import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfo } from './operations';

const initialState = {
    user: {
        name: null,
        email: null,
        calories: null,
        water: null,
        age: null,
        height: null,
        avatarURL: null,
        gender: null,
        weight: null,
        activity: null,
    },
    isLoading: false,
    error: null,
};


const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleFulfild = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload.data;
  };


export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchUserInfo.fulfilled, handleFulfild)
        .addCase(fetchUserInfo.pending, handlePending)
        .addCase(fetchUserInfo.rejected, handleRejected);
    }
});


export const userInfoReducer = userInfoSlice.reducer;