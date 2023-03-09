import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      마이페이지
      <Link to={"/coupons"}>coupons</Link>
    </div>
  );
};

export default MyPage;
