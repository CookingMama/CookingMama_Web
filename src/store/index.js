import { configureStore } from "@reduxjs/toolkit";
import couponsSlice from "./coupons/couponsSlice";
import editInfoSlice from "./editInfo/editInfoSlice";
import heartsSlice from "./hearts/heartsSlice";
import userHomeSlice from "./main/userHomeSlice";
import userSlice from "./user/userSlice";

export default configureStore({
  reducer: {
    userHome: userHomeSlice,
    user: userSlice,
    hearts: heartsSlice,
    coupons: couponsSlice,
    editInfo: editInfoSlice,
  },
});
