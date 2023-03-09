import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/user/Login";
import Main from "../components/main";
import SignUp from "../components/user/SignUp";
import Hearts from "../components/hearts/\bHearts";
import Coupons from "../components/coupons/Coupons";
import MyPage from "../components/myPage/MyPage";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/hearts" element={<Hearts/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/coupons" element={<Coupons/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
