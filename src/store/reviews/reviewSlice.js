import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, apiReview } from "../../api/api";

const initialState = {
  detailReview: {
    data: [],
    isOpen: false,
    writeIsOpen: false,
    itemId: null,
    userId: null,
    status: "idle",
    error: null,
  },
  myReview: {
    data: [],
    status: "idle",
    error: null,
  },
};

export const getReviewDetail = createAsyncThunk(
  "reviewDetail/get",
  async ({ itemId, userId }) => {
    const data = await api("get", `/review/${itemId}/${userId}`);
    return data.data;
  }
);
export const getMyReview = createAsyncThunk("myReview/get", async () => {
  const data = await api("get", "/user/myreview");
  return data.data;
});

export const PostReview = createAsyncThunk("review/post", async (inputData) => {
  const data = await apiReview("post", "/review/write", inputData);
  return data.data;
});

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setTrue: (state) => {
      state.detailReview.isOpen = true;
    },
    setFalse: (state) => {
      state.detailReview.isOpen = false;
    },
    setWriteTrue: (state) => {
      state.detailReview.writeIsOpen = true;
    },
    setWriteFalse: (state) => {
      state.detailReview.writeIsOpen = false;
    },
    setItemIds: (state, itemId) => {
      state.detailReview.itemId = itemId.payload;
    },
    setUserIds: (state, userId) => {
      state.detailReview.userId = userId.payload;
    },
  },
  extraReducers(bulider) {
    bulider
      .addCase(getReviewDetail.pending, (state, action) => {
        state.detailReview.status = "loading";
      })
      .addCase(getReviewDetail.fulfilled, (state, action) => {
        state.detailReview.status = "successed";
        state.detailReview.data = action.payload;
      })
      .addCase(getReviewDetail.rejected, (state, action) => {
        state.detailReview.status = "failed";
        state.detailReview.error = action.error.message;
      })
      .addCase(PostReview.pending, (state, action) => {
        state.detailReview.status = "loading";
      })
      .addCase(PostReview.fulfilled, (state, action) => {
        state.detailReview.status = "successed";
        state.detailReview.data = [...state.detailReview.data, action.payload];
      })
      .addCase(PostReview.rejected, (state, action) => {
        state.detailReview.status = "failed";
        state.detailReview.error = action.error.message;
      })
      .addCase(getMyReview.pending, (state, action) => {
        state.myReview.status = "loading";
      })
      .addCase(getMyReview.fulfilled, (state, action) => {
        state.myReview.status = "successed";
        state.myReview.data = action.payload;
      })
      .addCase(getMyReview.rejected, (state, action) => {
        state.myReview.status = "failed";
        state.myReview.error = action.error.message;
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
