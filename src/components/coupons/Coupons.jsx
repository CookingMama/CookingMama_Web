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
        <div className="bg-white p-5 rounded-t-md rounded-b-md m-1.5 w-full">
          <h1 className="flex justify-center text-4xl mt-0 mb-5">쿠폰 내역</h1>
          <div className="bg-sky-200 float-left rounded-lg white w-3/12 h-100">
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
                주문내역조회
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
          <div className="p-5 bg-sky-200 pt-1 rounded-t-md rounded-b-md m-1.5 float-right w-8/12 h-100">
            <form className="mt-8 space-y-6" method="POST" onSubmit={onSubmit}>
              <div className="bg-sky-200 p-6 rounded-t-md rounded-b-md m-1.5 ">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md w-auto">
                  <div className="h-5/12 bg-white p-2 rounded-lg">
                    <table>
                      <thead className="border-b-2 border-b-black whitespace-nowrap text-lg">
                        <tr>전체 쿠폰 내역</tr>
                        <tr>
                          <th>쿠폰명</th>
                          <th>할인율</th>
                          <th>사용유무</th>
                        </tr>
                      </thead>
                      <tbody className="whitespace-nowrap text-center">
                        {data.map((el) => (
                          <tr key={el.id}>
                            <td className="pl-5 pr-5 pt-10 pb-10">
                              {el.couponName}
                            </td>
                            <td className="pl-5 pr-5 pt-5 pb-5">
                              {el.couponPercentage}
                            </td>
                            <td className="pl-5 pr-5 pt-5 pb-5">
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
