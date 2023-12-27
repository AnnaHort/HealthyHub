import { createSlice } from '@reduxjs/toolkit';
import { fetchUserStatictic, fetchUserWeight } from './dashboardOperation';

const initionState = {
  food: {},
  water: {},
  weight: {},
  isLoading: false,
  error: null,
};

const monthsInfoSlice = createSlice({
  name: 'info',
  initialState: initionState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUserStatictic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserWeight.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserStatictic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.food = action.payload.food;
        state.water = action.payload.water;
        state.weight = action.payload.weight;
      })
      .addCase(fetchUserWeight.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weight = action.payload.weight;
      })
      .addCase(fetchUserStatictic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserWeight.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const userMonthsReducer = monthsInfoSlice.reducer;
