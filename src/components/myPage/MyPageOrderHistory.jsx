import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../store/orderHistory/orderHistorySlice";

const MyPageOrderHistory = () => {
  const { data } = useSelector((state) => state.orderHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col justify-center bg-white p-2 rounded-lg m-3">
      <div className="rounded-md">
        <h1 className="text-xl font-semibold mb-3 ml-5">최근 주문내역</h1>
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
            </tr>
          </thead>
          <tbody>
            {data?.map((el, idx) => (
              <tr key={idx}>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.orderDate.split("T")[0]}
                </td>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.orderNumber}
                </td>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.itemName}
                </td>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.itemOption}
                </td>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.itemCount}
                </td>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.itemTotalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </td>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.status === 0 ? "미출고" : "배송중"}{" "}
                </td>
                <td className="text-center whitespace-nowrap pt-3">
                  {el.trackingNumber}
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
  );
};

export default MyPageOrderHistory;
