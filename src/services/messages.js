/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createUser = createAsyncThunk(
  'message/createUser',
  async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const res = await fetch(`${BASE_URL}/api/message`, options);
    const result = await res.json();
    return result;
  },
);
export const getUserById = createAsyncThunk(
  'message/getUser',
  async (data) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(`${BASE_URL}/api/message/${data}`, options);
    const result = await res.json();
    return result;
  },
);

export const updateUser = createAsyncThunk(
  'message/updateUser',
  async (data) => {
    const { formdata, _id } = data;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    };

    const res = await fetch(`${BASE_URL}/api/message/${_id}`, options);
    const result = await res.json();
    return result;
  },
);