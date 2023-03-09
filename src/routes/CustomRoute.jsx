import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/user/Login";
import Main from "../components/main";
import SignUp from "../components/user/SignUp";
import ItemDetail from "../components/item/ItemDetail";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
