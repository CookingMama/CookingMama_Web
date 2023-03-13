import { configureStore } from "@reduxjs/toolkit";
import itemDetailSlice from "./item/itemDetailSlice";
import couponsSlice from "./coupons/couponsSlice";
import editInfoSlice from "./editInfo/editInfoSlice";
import heartsSlice from "./hearts/heartsSlice";
import userHomeSlice from "./main/userHomeSlice";
import userSlice from "./user/userSlice";
import reviewSlice from "./reviews/reviewSlice";
import orderHistorySlice from "./orderHistory/orderHistorySlice";
import itemListCategorySlice from "./item/itemListCategorySlice";

export default configureStore({
  reducer: {
    userHome: userHomeSlice,
    user: userSlice,
    itemDetail: itemDetailSlice,
    hearts: heartsSlice,
    coupons: couponsSlice,
    editInfo: editInfoSlice,
    review: reviewSlice,
    orderHistory: orderHistorySlice,
    itemListByCategory: itemListCategorySlice,
  },
});
