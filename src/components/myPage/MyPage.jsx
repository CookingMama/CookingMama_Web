import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      마이페이지
      <Link to={"/coupons"}>coupons</Link>
      <Link to={"/editinfo"}>회원정보 수정</Link>
    </div>
  );
};

export default MyPage;
