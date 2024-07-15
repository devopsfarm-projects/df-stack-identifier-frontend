// AuthSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isAuthenticated: false,
  // Other authentication-related state can go here
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    setUnauthenticated: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthenticated, setUnauthenticated } = authSlice.actions;

export default authSlice.reducer;
