import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCoupons } from "../../store/coupons/couponsSlice";
import { getOrder } from "../../store/orderHistory/orderHistorySlice";
import MyPageCoupons from "./MyPageCoupons";
import MyPageOrderHistory from "./MyPageOrderHistory";

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCoupons());
      dispatch(getOrder());
    }, []);
    
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-200">
        <div className="bg-white w-11/12 p-3 rounded-t-md rounded-b-md">
          <h1 className="flex justify-center text-4xl mt-0 mb-5">내 정보</h1>
          <div>
            <div className="bg-sky-200 float-left rounded-lg white w-3/12 pb-12">
              <div className="flex justify-center">
                <Link
                  to={"/editinfo"}
                  className="mt-10 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  회원정보 수정
                </Link>
              </div>
              <div className="flex justify-center">
                <Link
                  to={"/orderhistory"}
                  className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  주문내역 조회
                </Link>
              </div>
              <div className="flex justify-center">
                <Link
                  to={"/coupons"}
                  className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  보유쿠폰 조회
                </Link>
              </div>
              <div className="flex justify-center">
                <Link
                  to={"/reviews"}
                  className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  나의 리뷰 조회
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="dfloat-right float-none">
              <div className="bg-sky-200 rounded-md flex flex-col">
                <MyPageOrderHistory />
                <MyPageCoupons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
