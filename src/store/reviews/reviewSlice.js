import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, apiReview } from "../../api/api";

const initialState = {
  data: [],
  isOpen: false,
  writeIsOpen: false,
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

export const PostReview = createAsyncThunk("review/post", async (inputData) => {
  const data = await apiReview("post", "/review/write", inputData);
  return data.data;
});

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
    setWriteTrue: (state) => {
      state.writeIsOpen = true;
    },
    setWriteFalse: (state) => {
      state.writeIsOpen = false;
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
      })
      .addCase(PostReview.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(PostReview.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(PostReview.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {
  setTrue,
  setFalse,
  setItemIds,
  setUserIds,
  setWriteTrue,
  setWriteFalse,
} = ReviewSlice.actions;
export default ReviewSlice.reducer;
