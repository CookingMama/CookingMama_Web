import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addCount,
  getHearts,
  increment,
  incremented,
} from "../../store/hearts/heartsSlice";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const Hearts = () => {
  const { data } = useSelector((state) => state.hearts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHearts());
  }, []);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-200">
        <div className="bg-white p-5 rounded-t-md rounded-b-md m-1.5">
          <h1 className="flex justify-center text-4xl mt-0 mb-5">Hearts</h1>
          <div className="p-5 bg-sky-200 pt-1 rounded-t-md rounded-b-md m-1.5">
            <form className="mt-8 space-y-6" method="POST" onSubmit={onSubmit}>
              <div className="bg-white p-6 rounded-t-md rounded-b-md m-1.5 ">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md w-auto">
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
                      {data?.map((el) => (
                        <tr key={el.id}>
                          <td className="pl-5 pr-5 pt-10 pb-10">{"이미지"}</td>
                          <td className="pl-5 pr-5 pt-5 pb-5">{el.itemName}</td>
                          <td className="pl-5 pr-5 pt-5 pb-5">
                            {el.itemOption}
                          </td>
                          <td className="pl-5 pr-5 pt-5 pb-5">
                            {el.itemPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </td>
                          <td className="pl-5 pr-5 pt-5 pb-5">
                            <button
                              className="mr-1 relative"
                            >
                              <AiOutlinePlusSquare />
                            </button>
                            {el.count}
                            <button className="ml-1">
                              <AiOutlineMinusSquare />
                            </button>
                          </td>
                          <td className="pl-5 pr-5 pt-5 pb-5">
                            {(el.itemPrice * el.count)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-center mt-10 mb-5">
                    <div className="flex whitespace-nowrap flex-col text-center w-1/5">
                      <h1 className="border-b-2 border-b-black text-xl">
                        총 주문금액
                      </h1>
                      {data && (
                        <div className="text-lg mt-2 mb-4">
                          {data
                            .reduce(
                              (sum, currValue) =>
                                sum + currValue.itemPrice * currValue.count,
                              0
                            )
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pl-20 pr-20 text-center">
                <Link
                  to={"/"}
                  className="justify-center mr-9 w-32 relative block appearance-none rounded-t-2xl rounded-b-2xl border px-3 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  쇼핑하기
                </Link>
                <button
                  type="submit"
                  className="ml-9 w-32 relative block appearance-none rounded-t-2xl rounded-b-2xl border px-3 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  주문하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hearts;
