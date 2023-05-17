import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfile } from "./updateActions";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // update user profile
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        state.loading = false;
        state.success = true; // update successful
      })
      .addCase(updateUserProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default updateSlice.reducer;
