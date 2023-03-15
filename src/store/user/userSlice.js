import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const login = createAsyncThunk("/user/login", async (user) => {
  const response = await api("POST", "/user/login", user);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
      state.status = initialState.status;
      state.error = initialState.error;
      localStorage.clear();
      alert("정상적으로 로그아웃 되었습니다.");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action.payload);
        state.data = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
