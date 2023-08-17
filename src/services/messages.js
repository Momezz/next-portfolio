/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createMessage = createAsyncThunk(
  'message/createMessage',
  async (message) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    };

    const res = await fetch(`${BASE_URL}api/messages`, options);
    const result = await res.json();
    return result;
  },
);
export const getMessageById = createAsyncThunk(
  'message/getMessage',
  async (data) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(`${BASE_URL}api/messages/${data}`, options);
    const result = await res.json();
    return result;
  },
);
