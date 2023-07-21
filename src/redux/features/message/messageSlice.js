/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  messages: [],
};

export const getMessageById = createAsyncThunk('messages/getMessageById', async (id) => {
  const resp = await fetch(`${BASE_URL}/api/messages/${id}`);
  const data = await resp.json();
  return data;
});

export const getMessages = createAsyncThunk('messages/getMessages', async () => {
  const response = await fetch(`${BASE_URL}/api/messages`);
  const data = await response.json();
  return data;
});

export const createMessage = createAsyncThunk('messages/createMessage', async (message) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  };

  const response = await fetch(`${BASE_URL}/api/messages`, options);
  const data = await response.json();
  return data;
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    captureData: (state, action) => {
      state.messages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(getMessageById.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(createMessage.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export default messagesSlice.reducer;
export const { captureData } = messagesSlice.actions;