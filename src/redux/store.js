import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './features/message/messageSlice';

const store = configureStore({
  reducer: {
    message: messageSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;