import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

const setHeader = token => {
  return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};

export const fetchUserStatictic = createAsyncThunk(
  'api/stats/month/:monthNumber/fetchUserStatictic',
  async (monthNumber, thunkAPI) => {
    try {
      const res = await axios.get(`api/stats/month/${monthNumber}`);
      console.log('Data received:', res.data);

      if (res.data.token) {
        setHeader(res.data.token);
      } else {
        console.error('Token is missing in the server response.');
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);
