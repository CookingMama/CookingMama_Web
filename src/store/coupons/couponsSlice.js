import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getCoupons = createAsyncThunk("/user/coupons", async () => {
  const response = await api("GET", "user/coupons");
  return response.data;
});

export const addCoupons = createAsyncThunk(
  "/user/coupons/post",
  async (couponCode) => {
    const response = await api("POST", "user/coupons", couponCode);
    alert(response.data);
    return response.data;
  }
);

const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCoupons.pending, (state, actionj) => {
        state.status = "loading";
      })
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.status = "successed";
        // state.data = [...state.data, ...action.payload.friendTodos];
        state.data = action.payload;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCoupons.pending, (state, actionj) => {
        state.status = "loading";
      })
      .addCase(addCoupons.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(addCoupons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default couponsSlice.reducer;
