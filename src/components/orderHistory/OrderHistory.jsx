import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrder } from "../../store/orderHistory/orderHistorySlice";
import { BsPencilSquare } from "react-icons/bs";
import { setWriteTrue } from "../../store/reviews/reviewSlice";
import ReviewWrite from "../reviews/ReviewWrite";

const OrderHistory = () => {
  const [toReview, setToReview] = useState({
    itemId: 0,
    itemName: "",
  });
  const { data, status } = useSelector((state) => state.orderHistory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  const forReview = (itemId, itemName) => {
    setToReview({ itemId: itemId, itemName: itemName });
    dispatch(setWriteTrue());
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 bg-sky-200">
        <ReviewWrite itemName={toReview?.itemName} itemId={toReview?.itemId} />
        <div className="bg-white w-11/12 p-3 rounded-t-md rounded-b-md">
          <h1 className="flex justify-center text-4xl mt-0 mb-5">주문내역</h1>
          <div className="bg-sky-200 float-left rounded-lg white w-3/12 pb-12">
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
          <div className="flex justify-center">
            <div className="bg-sky-200 rounded-md float-right p-3">
              <div className="bg-white p-6 rounded-t-md rounded-b-md ">
                <div className="rounded-md w-auto">
                  <table>
                    <thead className="border-b-2 border-b-black whitespace-nowrap text-lg">
                      <tr>
                        <th className="pl-2 pr-2">주문일</th>
                        <th className="pl-2 pr-2">주문번호</th>
                        <th className="pl-2 pr-2">상품명</th>
                        <th className="pl-2 pr-2">옵션</th>
                        <th className="pl-2 pr-2">수량</th>
                        <th className="pl-2 pr-2">최종결제금액</th>
                        <th className="pl-2 pr-2">진행상태</th>
                        <th className="pl-2 pr-2">송장번호</th>
                        <th className="pl-2 pr-2">리뷰 쓰기</th>
                      </tr>
                    </thead>
                    <tbody>
                      {status === "successed" &&
                        data?.map((el, idx) => (
                          <tr key={idx} className="items-center">
                            <td className="text-center">
                              {el.orderDate.split("T")[0]}
                            </td>
                            <td className="text-center">{el.orderNumber}</td>
                            <td className="text-center">{el.itemName}</td>
                            <td className="text-center">{el.itemOption}</td>
                            <td className="text-center">{el.itemCount}</td>
                            <td className="text-center">
                              {el.itemTotalPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </td>
                            <td className="text-center">
                              {el.status === 0 ? "미출고" : "배송중"}{" "}
                            </td>
                            <td className="text-center">{el.trackingNumber}</td>
                            <td
                              onClick={() => forReview(el.itemId, el.itemName)}
                              className="flex justify-center text-xl text-center hover:cursor-pointer"
                            >
                              <BsPencilSquare />
                            </td>
                          </tr>
                        ))}
                      <tr>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
