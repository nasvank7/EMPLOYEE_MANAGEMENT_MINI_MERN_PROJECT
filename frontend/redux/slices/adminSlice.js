import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminUsername: localStorage.getItem('adminInfo')
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.adminUsername = action.payload;
    },
    logout: (state, action) => {
      state.adminUsername = null;
      localStorage.removeItem('adminInfo');
    }
  }
});

export const { setAdmin, logout } = adminSlice.actions;

export default adminSlice.reducer;
