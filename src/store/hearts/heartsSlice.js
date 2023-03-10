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

export const postHearts = createAsyncThunk(
  "/user/postHearts",
  async (inputList) => {
    const response = await api("POST", "/user/hearts", inputList);
    return response.data;
  }
);

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
      })
      .addCase(postHearts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postHearts.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(postHearts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default heartsSlice.reducer;
