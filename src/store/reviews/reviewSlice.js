import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  isOpen: false,
  itemId: null,
  userId: null,
  status: "idle",
  error: null,
};

export const getReviewDetail = createAsyncThunk(
  "reviewDetail/get",
  async ({ itemId, userId }) => {
    const data = await api("get", `/review/${itemId}/${userId}`);
    return data.data;
  }
);

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setTrue: (state) => {
      state.isOpen = true;
    },
    setFalse: (state) => {
      state.isOpen = false;
    },
    setItemIds: (state, itemId) => {
      state.itemId = itemId.payload;
    },
    setUserIds: (state, userId) => {
      state.userId = userId.payload;
    },
  },
  extraReducers(bulider) {
    bulider
      .addCase(getReviewDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getReviewDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getReviewDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setTrue, setFalse, setItemIds, setUserIds } =
  ReviewSlice.actions;
export default ReviewSlice.reducer;
