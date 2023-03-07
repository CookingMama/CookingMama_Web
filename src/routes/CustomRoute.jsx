import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Main from "../components/main";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
