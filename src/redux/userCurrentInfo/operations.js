import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

export const setAuth = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUserInfo = createAsyncThunk(
  'get/userCurrent',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setAuth(persistToken);
      const response = await axios.get('api/user/current');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);