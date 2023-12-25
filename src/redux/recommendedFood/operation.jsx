import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

// получание списка контактов
export const listRecommendedFoodPage = createAsyncThunk(
  '/api/recommended-food',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/recommended-food');
      console.log('Data received:', res.data);
      return res.data;
    } catch (error) {
       console.error('Error fetching recommended food:', error);
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);


