import { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderPage from "./OrderPage";
import OrderPageTotal from "./OrderPageTotal";

const OrderPageMyCoupons = ({ coupon, setCoupon }) => {
  const { data } = useSelector((state) => state.coupons);

  const onChangeHandler = (e, couponPercentage) => {
    setCoupon({ couponId: e.target.value, couponPercentage: couponPercentage });
  };

  const onClick = () => {
    setCoupon({ couponId: 0, couponPercentage: 0 });
  };

  return (
    <>
      <div className="m-3 flex flex-col justify-center">
        <table>
          <thead className="border-b-2 border-b-black whitespace-nowrap text-lg">
            <tr>
              <th className="ml-10 mr-10">쿠폰명</th>
              <th className="ml-10 mr-10">할인율</th>
              <th className="ml-10 mr-10">사용할 쿠폰</th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap text-center">
            {data?.map(
              (el) =>
                el.status === 0 && (
                  <tr>
                    <td className="pl-5 pr-5 pt-5 pb-5">{el.couponName}</td>
                    <td className="pl-5 pr-5">{el.couponPercentage}%</td>
                    <td className="pl-5 pr-5">
                      <input
                        type={"radio"}
                        name="couponName"
                        value={el.couponId}
                        checked={coupon.couponId == el.couponId}
                        onChange={(e) =>
                          onChangeHandler(e, el.couponPercentage)
                        }
                      />
                    </td>
                  </tr>
                )
            )}
            
          </tbody>
        </table><div className="flex justify-center flex-col">
              <button 
              className="border-black border-"
              type="button" 
              onClick={onClick}>
                쿠폰 사용 취소
              </button>
            </div>
      </div>
    </>
  );
};
export default OrderPageMyCoupons;
