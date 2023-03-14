import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const OrderPageTotal = ({
  couponPercentage,
  orderPrice,
  setOrderPriceInfo,
}) => {
  useEffect(() => {
    console.log({
      couponPercentage,
      orderPrice,
      setOrderPriceInfo,
    });
    const orderPriceInfo = {
      itemDiscount: orderPrice * (couponPercentage / 100),
      itemTotalPrice: orderPrice - orderPrice * (couponPercentage / 100),
      orderNumber: 2345,
    };
    console.log(orderPriceInfo);
    setOrderPriceInfo(orderPriceInfo);
  }, [couponPercentage, orderPrice]);

  return (
    <>
      <div className="rounded-md flex flex-col justify-center m-3">
        <table>
          <thead className="border-b-2 border-b-black whitespace-nowrap text-lg">
            <tr>
              <th className="ml-10 mr-10">총 주문금액</th>
              <th className="ml-10 mr-10">총 할인금액</th>
              <th className="ml-10 mr-10">총 결제금액</th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap text-center">
            <tr>
              <td>
                {orderPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </td>
              <td>
                {(orderPrice * (couponPercentage / 100))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </td>
              <td>
                {(orderPrice - orderPrice * (couponPercentage / 100))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderPageTotal;
