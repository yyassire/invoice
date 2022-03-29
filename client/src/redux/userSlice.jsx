import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchingStart: (state) => {
      state.invoices = null;
      state.isFetching = true;
      state.error = false;
    },
    fetchingSuccess: (state, action) => {
      state.invoices = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    fetchingError: (state) => {
      state.invoices = null;
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { fetchingError, fetchingStart, fetchingSuccess } =
  userSlice.actions;
export default userSlice.reducer;
