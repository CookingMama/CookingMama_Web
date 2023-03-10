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

export const updateCount = createAsyncThunk(
  "/user/hearts/plus",
  async (request) => {
    console.log(request);
    const response = await api("PUT", "/user/hearts", request);
    console.log(response);
    return response.data;
  }
);

export const deleteItem = createAsyncThunk(
  "user/hearts/delete",
  async (heartsId) => {
    const response = await api("DELETE", `/user/hearts/${heartsId}`);
    alert("선택 항목이 삭제되었습니다.");
    window.location.reload();
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
      .addCase(updateCount.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCount.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(updateCount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteItem.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default heartsSlice.reducer;
