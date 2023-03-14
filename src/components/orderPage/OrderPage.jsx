import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCoupons } from "../../store/coupons/couponsSlice";
import { getInfo } from "../../store/editInfo/editInfoSlice";
import { getHearts } from "../../store/hearts/heartsSlice";
import { addOrder } from "../../store/order/orderSlice";
import OrderPageHearts from "./OrderPageHearts";
import OrderPageMyAddress from "./OrderPageMyAddress";
import OrderPageMyCoupons from "./OrderPageMyCoupons";
import OrderPageTotal from "./OrderPageTotal";

const OrderPage = () => {
  const { data } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCoupons());
    dispatch(getInfo());
    dispatch(getHearts());
  }, []);

  const [coupon, setCoupon] = useState({
    couponId: 0,
    couponPercentage: 0,
  });

  const [orderItemInfo, setOrderItemInfo] = useState([
    {
      heartsId: 0,
      itemId: 0,
      itemPrice: 0,
      categoryName: "",
      itemCount: 0,
    },
  ]);

  const [orderPriceInfo, setOrderPriceInfo] = useState({
    itemDiscount: 0,
    itemTotalPrice: 0,
    orderNumber: 0,
  });

  const [orderPrice, setOrderPrice] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(orderItemInfo);
    console.log(orderPriceInfo);
    const request = orderItemInfo.map((el) => ({
      ...el,
      ...orderPriceInfo,
    }));
    console.log(request);
    dispatch(addOrder(request));
    navigate("/orderhistory");
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-200">
        <div className="bg-white p-5 rounded-t-md rounded-b-md m-1.5">
          <form className="mt-8 space-y-6" method="POST" onSubmit={onSubmit}>
            <h1 className="text-4xl font-semibold mb-3 ml-5 flex justify-center">
              Order
            </h1>
            <div className="p-5 bg-sky-200 pt-1 rounded-t-md rounded-b-md">
              <div>
                <div className="bg-white rounded-md flex justify-center m-3">
                  <OrderPageHearts
                    orderPrice={orderPrice}
                    setOrderPrice={setOrderPrice}
                    setOrderItemInfo={setOrderItemInfo}
                  />
                </div>
                <div className="bg-white rounded-md flex justify-center m-3">
                  <OrderPageMyAddress />
                </div>
                <div className="bg-white rounded-md flex justify-center m-3">
                  <OrderPageMyCoupons coupon={coupon} setCoupon={setCoupon} />
                </div>
                <div className="bg-white rounded-md flex justify-center m-3">
                  <OrderPageTotal
                    couponPercentage={coupon.couponPercentage}
                    orderPrice={orderPrice}
                    setOrderPriceInfo={setOrderPriceInfo}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="ml-9 w-32 relative block appearance-none rounded-t-2xl rounded-b-2xl border px-3 py-2 text-black bg-gray-400 sm:text-sm"
                  >
                    결제하기
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default OrderPage;
