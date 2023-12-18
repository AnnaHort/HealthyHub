import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// базова адреса запиту на бек
axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

// токен
const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };


// реєстрація
export const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
      try {
        const response = await axios.post('/api/auth/signup', userData);
        token.set(response.data.token);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  // логін
export const logIn = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
      try {
        const response = await axios.post('/api/auth/signin', userData);
        token.set(response.data.token);
        console.log(response.data)
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  // вихід з системи
export const logOut = createAsyncThunk(
    'auth/logout',
    async (userData, thunkAPI) => {
      try {
        await axios.post('/api/auth/signout', userData);
        token.unset();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// refresh
export const fetchCurentUser = createAsyncThunk(
  'auth/fetchCurentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state)
    const persistedToken = state.authReducer.token;
    console.log(persistedToken)
    if (persistedToken === null || persistedToken === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);