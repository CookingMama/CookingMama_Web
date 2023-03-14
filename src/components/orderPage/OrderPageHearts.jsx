import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineDelete,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { deleteItem } from "../../store/hearts/heartsSlice";
import OrderPageTotal from "./OrderPageTotal";

const OrderPageHearts = ({ orderPrice, setOrderPrice, setOrderItemInfo }) => {
  const { data } = useSelector((state) => state.hearts);

  const dispatch = useDispatch();

  useEffect(() => {
    const orderItemInfo = data?.map((el) => ({
      heartsId: el.heartsId,
      itemId: el.itemId,
      itemPrice: el.itemPrice,
      categoryName: el.categoryName,
      itemCount: el.count,
      itemOption: el.itemOption,
    }));
    setOrderItemInfo(orderItemInfo);
  }, [data]);

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = data?.map((el) => ({
      heartsId: el.heartsId,
      count: el.count,
      itemPrice: el.itemPrice,
    }));
    setHearts(newHearts);
  }, [data]);

  const onClickDelete = (e, id) => {
    dispatch(deleteItem(id));
  };

  const onClickPlus = (e, heartsId) => {
    const updatePlus = hearts.map((el) =>
      heartsId === el.heartsId
        ? {
            heartsId: el.heartsId,
            count: el.count + 1,
            itemPrice: el.itemPrice,
          }
        : el
    );
    setHearts(updatePlus);
  };

  const onClickMinus = (e, heartsId) => {
    const updateMinus = hearts.map((el) =>
      heartsId === el.heartsId
        ? {
            heartsId: el.heartsId,
            count: el.count - 1,
            itemPrice: el.itemPrice,
          }
        : el
    );
    setHearts(updateMinus);
  };

  useEffect(() => {
    setOrderPrice(
      hearts?.reduce(
        (sum, currValue) => sum + currValue.itemPrice * currValue.count,
        0
      )
    );
  }, [hearts]);

  console.log(data);

  return (
    <div className="rounded-md flex flex-col justify-center m-3">
      <table>
        <thead className="border-b-2 border-b-black whitespace-nowrap text-lg">
          <tr>
            <th>이미지</th>
            <th>상품명</th>
            <th>옵션</th>
            <th>판매가</th>
            <th>수량</th>
            <th>주문금액</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap text-center">
          {data?.map((el, index) => (
            <tr key={el.id}>
              <td className="pl-5 pr-5 pt-10 pb-10">{"이미지"}</td>
              <td className="pl-5 pr-5 pt-5 pb-5">{el.itemName}</td>
              <td className="pl-5 pr-5 pt-5 pb-5">{el.itemOption}</td>
              <td className="pl-5 pr-5 pt-5 pb-5">
                {el.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </td>
              <td className="pl-5 pr-5 pt-5 pb-5">
                <button
                  className="mr-1"
                  type="button"
                  onClick={(e) => onClickPlus(e, el.heartsId)}
                >
                  <AiOutlinePlusSquare />
                </button>
                {hearts[index]?.count}
                <button
                  className="ml-1"
                  type="button"
                  onClick={(e) => onClickMinus(e, el.heartsId)}
                >
                  <AiOutlineMinusSquare />
                </button>
              </td>
              <td className="pl-5 pr-5 pt-5 pb-5">
                {(el.itemPrice * hearts[index]?.count)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </td>
              <td>
                <button
                  type="button"
                  onClick={(e) => onClickDelete(e, el.heartsId)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderPageHearts;
