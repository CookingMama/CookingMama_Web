import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCoupons, getCoupons } from "../../store/coupons/couponsSlice";

const Coupons = () => {
  const { data } = useSelector((state) => state.coupons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoupons());
    console.log(data);
  }, []);

  const [coupon, setCoupon] = useState({
    couponCode: "",
  });

  const onChangeHandler = async (e) => {
    const { name, value } = e.target;
    setCoupon({ ...coupon, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(coupon);
    dispatch(addCoupons(coupon));
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-200">
        <div className="bg-white w-11/12 p-3 rounded-t-md rounded-b-md">
          <h1 className="flex justify-center text-4xl mt-0 mb-5">쿠폰 내역</h1>
          <div className="bg-sky-200 float-left rounded-lg white w-3/12 pb-10">
            <div className="flex justify-center">
              <Link
                to={"/mypage"}
                className="mt-10 rounded-t-2xl rounded-b-2xl  p-20 py-2 text-black bg-gray-400 sm:text-sm"
              >
                내 정보
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                to={"/editinfo"}
                className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
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
                to={"/reviews"}
                className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
              >
                나의 리뷰 조회
              </Link>
            </div>
          </div>
          <div className="p-5 bg-sky-200 rounded-md float-right w-8/12">
            <form className="space-y-6" method="POST" onSubmit={onSubmit}>
              <div className="bg-sky-200 rounded-md ">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md w-auto">
                  <div className="flex justify-center bg-white p-2 rounded-lg">
                    <table>
                      <thead className="w-full border-b-2 border-b-black whitespace-nowrap text-lg">
                        <tr>
                          <th className="ml-10 mr-10">쿠폰명</th>
                          <th className="ml-10 mr-10">할인율</th>
                          <th className="ml-10 mr-10">사용유무</th>
                        </tr>
                      </thead>
                      <tbody className="whitespace-nowrap text-center">
                        {data.map((el) => (
                          <tr key={el.id}>
                            <td className="pl-5 pr-5 pt-5 pb-5">
                              {el.couponName}
                            </td>
                            <td className="pl-5 pr-5">
                              {el.couponPercentage}
                            </td>
                            <td className="pl-5 pr-5">
                              {el.status === 0 ? "미사용" : "사용 완료"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-center mt-10 mb-5 bg-white h-4/12 p-5 rounded-lg">
                    <div className="flex whitespace-nowrap flex-col">
                      <div className="text-xl">쿠폰 등록</div>
                      {data && <div className="text-lg mt-2 mb-4"></div>}
                      <div className="flex justify-between text-center p-1 bg-sky-200 rounded-lg">
                        <input
                          type={"text"}
                          id="couponCode"
                          name="couponCode"
                          placeholder="쿠폰 코드 입력"
                          onChange={onChangeHandler}
                          className="m-1 text-center rounded-lg text-gray-500 relative w-full border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        ></input>
                        <button
                          type="submit"
                          className="m-1 rounded-t-2xl rounded-b-2xl  px-3 py-2 text-black bg-gray-400 sm:text-sm"
                        >
                          등록
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Coupons;
