import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getUserHome = createAsyncThunk("userHome/get", async () => {
  const data = await api("get", "/user");
  return data.data;
});

const userHomeSlice = createSlice({
  name: "userHome",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getUserHome.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserHome.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action);
        state.data = action.payload;
      })
      .addCase(getUserHome.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userHomeSlice.reducer;
