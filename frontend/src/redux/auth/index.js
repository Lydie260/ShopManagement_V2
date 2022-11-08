import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: { token: "", user: { name: "nana" }, isFetching: false },
  reducers: {
    login(state, action) {
      state.token = action.payload?.data?.token;
      state.user = action.payload?.data?.user;
    },
    setFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
