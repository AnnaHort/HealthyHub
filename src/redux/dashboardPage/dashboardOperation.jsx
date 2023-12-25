import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUserStatictic = createAsyncThunk(
  'api/stats/month/:monthNumber/fetchUserStatictic',
  async (_, thunkAPI) => {
    try {

        const state = thunkAPI.getState();
        const persistToken = state.authReducer.token;
        if (!persistToken) {
          return thunkAPI.rejectWithValue('Unable to fetch user');

      const res = await axios.get(`api/stats/month/${monthNumber}`);
      console.log('Data received:', res.data);

      if (res.data.token) {
        setHeader(res.data.token);
      } else {
        console.error('Token is missing in the server response.');

      }
      setHeader(persistToken);
      const res = await axios.get('api/stats/month/12');
      console.log('Data received:', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);
