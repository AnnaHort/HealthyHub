import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

export const setAuth = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUserStatsDay = createAsyncThunk(
  'get/userStatsInfo',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.authReducer.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setAuth(persistToken);

      const response = await axios.get('/api/stats/today');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'post/WaterAdd',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.authReducer.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setAuth(persistToken);
      const response = await axios.post('api/stats/water-intake', credentials );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delWater = createAsyncThunk(
  'post/WaterAdd',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.authReducer.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setAuth(persistToken);
      const response = await axios.delete('api/stats/water-intake');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFood = createAsyncThunk(
  'post/FoodAdd',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.authReducer.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }
      setAuth(persistToken);
      const response = await axios.post('api/stats/food-intake', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);