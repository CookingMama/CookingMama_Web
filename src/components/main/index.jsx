import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
