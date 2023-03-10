import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getOrder = createAsyncThunk("/ user/orders", async() => {
    const response = await api("GET", "/user/orders");
    return response.data;
})

const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(getOrder.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(getOrder.fulfilled, (state, action) => {
          state.status = "successed";
          state.data = action.payload;
        })
        .addCase(getOrder.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    }
});

export default orderHistorySlice.reducer;
