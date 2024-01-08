/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/reducers/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers go here
  },
});

export default store;
