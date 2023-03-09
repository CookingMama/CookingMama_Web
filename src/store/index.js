import { configureStore } from "@reduxjs/toolkit";
import itemDetailSlice from "./item/itemDetailSlice";
import userHomeSlice from "./main/userHomeSlice";
import itemSlice from "./main/userHomeSlice";
import userSlice from "./user/userSlice";

export default configureStore({
  reducer: {
    userHome: userHomeSlice,
    user: userSlice,
    itemDetail: itemDetailSlice,
  },
});
