import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const addOrder = createAsyncThunk("/orders", async (request) => {
  const response = await api("POST", "/orders", request);
  return response.data;
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(addOrder.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
