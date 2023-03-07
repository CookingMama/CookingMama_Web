import { configureStore } from "@reduxjs/toolkit";

import userHomeSlice from "./items/userHomeSlice";
import itemSlice from "./items/userHomeSlice";
import userSlice from "./user/userSlice";

export default configureStore({
  reducer: {
    userHome: userHomeSlice,
    user: userSlice,
  }
});
