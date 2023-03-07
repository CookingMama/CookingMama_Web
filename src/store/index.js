import { configureStore } from "@reduxjs/toolkit";
import userHomeSlice from "./items/userHomeSlice";
import itemSlice from "./items/userHomeSlice";

export default configureStore({
  reducer: {
    userHome: userHomeSlice,
  },
});
