import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getHearts = createAsyncThunk("/user/hearts", async () => {
  const response = await api("GET", "/user/hearts");
  return response.data;
});

const heartsSlice = createSlice({
  name: "hearts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getHearts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHearts.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getHearts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default heartsSlice.reducer;
