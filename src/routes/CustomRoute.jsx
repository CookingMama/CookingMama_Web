import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/user/Login";
import Main from "../components/main";
import SignUp from "../components/user/SignUp";
import ItemDetail from "../components/item/ItemDetail";
import Hearts from "../components/hearts/Hearts";
import Coupons from "../components/coupons/Coupons";
import MyPage from "../components/myPage/MyPage";
import EditInfo from "../components/editInfo/EditInfo";
import OrderHistory from "../components/orderHistory/OrderHistory";
import OrderPage from "../components/orderPage/OrderPage";
import ItemCategoryList from "../components/item/ItemCategoryList";
import ReviewWrite from "../components/reviews/ReviewWrite";
import Review from "../components/reviews/Review";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/itemdetail/:id" element={<ItemDetail />} />
          <Route path="/hearts" element={<Hearts />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/editinfo" element={<EditInfo />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/items/:categoryId" element={<ItemCategoryList />} />
          <Route path="/review/:itemId" element={<ReviewWrite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
