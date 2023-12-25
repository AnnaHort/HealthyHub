import { createSlice } from '@reduxjs/toolkit';
import { fetchUserStatsDay } from './operations';

const initialState = {
    food: {},
    water: {},
    isLoading: false,
    load: false,
    error: null,
};


const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  };
  
  const handlePending = state => {
    state.isLoading = true;
    state.load = false;

  };
  
  const handleFulfild = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.food = action.payload.food;
    state.water = action.payload.water;
    state.load = true;

  };


export const userStatsDay = createSlice({
    name: 'userStatsDay',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchUserStatsDay.fulfilled, handleFulfild)
        .addCase(fetchUserStatsDay.pending, handlePending)
        .addCase(fetchUserStatsDay.rejected, handleRejected);
    }
});


export const userStatsDayReducer = userStatsDay.reducer;