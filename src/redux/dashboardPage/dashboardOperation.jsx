import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

const setHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUserStatictic = createAsyncThunk(
  'api/stats/month/:monthNumber/fetchUserStatictic',
  async (indexMounth, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.authReducer.token;

      if (!persistToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setHeader(persistToken);
      const res = await axios.get(`api/stats/month/${indexMounth}`);
      console.log('Data received:', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);

export const fetchUserWeight = createAsyncThunk(
  'api/user/weight/:month/fetchUserWeight',
  async (monthNumber, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.authReducer.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setHeader(persistToken);
      const res = await axios.get(`api/user/weight/${monthNumber}`);
      console.log('Data received:', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);
