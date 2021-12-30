import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
const initialState = { user: null, token: null, isLoggedIn: false};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { logout: () => initialState },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.token = payload.access_token;
        state.isLoggedIn = true;
      }
    );
  },
});

//MIDDLEWARE

export default authSlice.reducer;
export const { logout } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectisLoggedIn = (state) => state.auth.isLoggedIn;
