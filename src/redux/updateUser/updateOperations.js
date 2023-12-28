import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const updateUser = createAsyncThunk(
  'update/updateUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put('/api/user/update', userData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserGoal = createAsyncThunk(
  'update/updateUsergoal',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put('api/user/goal', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "get/getCurrentUser",
  async(userData, thunkAPI) => {
    try {
      const response = await axios.get("/api/user/current");
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const setUpdateUserFalse = createAction('update/setUpdateUserFalse');
