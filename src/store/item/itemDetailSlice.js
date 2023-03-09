import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getItemDetail = createAsyncThunk(
  "itemDetail/get",
  async (itemId) => {
    const data = await api("get", `/user/itemdetail/${itemId}`);
    return data.data;
  }
);

const itemDetailSlice = createSlice({
  name: "itemDetail",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getItemDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getItemDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getItemDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default itemDetailSlice.reducer;
