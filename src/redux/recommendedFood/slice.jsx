import { createSlice } from '@reduxjs/toolkit';
import { listRecommendedFoodPage } from './operation';

const initialState = {
  foodItem: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const recommendedFoodSlice = createSlice({
  name: 'recommendedFood',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
    .addCase(listRecommendedFoodPage.pending, (state) => {
      state.foodItem.isLoading = true;
    }).addCase(listRecommendedFoodPage.fulfilled, (state, action) => {
        state.foodItem.isLoading = false;
        state.foodItem.error = null;
        state.foodItem.items = action.payload;
    }).addCase(listRecommendedFoodPage.rejected, (state, action) => {
        state.foodItem.isLoading = false;
        state.foodItem.error = action.payload;
    })
  },
});

export const recommendedFoodReducer = recommendedFoodSlice.reducer;
