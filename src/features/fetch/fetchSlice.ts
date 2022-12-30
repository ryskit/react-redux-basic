import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface FetchState {
  users: User[];
}

const initialState: FetchState = {
  users: [],
};

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get<Array<User>>(apiUrl);
  return res.data;
});

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    });
  },
});

export const selectUsers = (state: RootState) => state.fetch.users;

export default fetchSlice.reducer;
