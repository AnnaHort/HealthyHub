import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { userStatsDayReducer } from './userStatsDay/slice';
import { updateReducer } from './updateUser/updateslice';
import { recommendedFoodReducer } from './recommendedFood/slice';
import { userMonthsReducer } from './dashboardPage/dashboardSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  // стейт з властивістю authReducer (authSlice.reducer)
  reducer: {
    authReducer: persistReducer(authPersistConfig, authReducer),
    updateReducer: updateReducer,
    userStatsDayReducer: userStatsDayReducer,
    recommendedFood: recommendedFoodReducer,
    userStatsMonthsReducer: userMonthsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);