import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getItemListByCategory = createAsyncThunk(
  "itemListCategory/get",
  async (categoryId) => {
    const data = await api("get", `/user/${categoryId}`);
    return data.data;
  }
);

const itemListCategorySlice = createSlice({
  name: "itemListCategory",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getItemListByCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getItemListByCategory.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getItemListByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default itemListCategorySlice.reducer;
