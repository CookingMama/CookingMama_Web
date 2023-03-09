import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const getInfo = createAsyncThunk("user/editInfo", async () => {
  const response = await api("GET", "/user/my-page");
  return response.data;
});

export const putInfo = createAsyncThunk("user/editinfo/put", async (user) => {
  const response = await api("PUT", "/user/my-page", user);
  alert("수정이 완료되었습니다.");
  window.location.reload();
  return response.data;
});

const editInfoSlice = createSlice({
  name: "editInfo",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(putInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(putInfo.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(putInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default editInfoSlice.reducer;
