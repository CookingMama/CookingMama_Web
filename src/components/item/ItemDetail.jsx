import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetail } from "../../store/item/itemDetailSlice";
import { useLocation, useNavigate, useParams } from "react-router";
import { BsStarFill, BsStar, BsMusicNoteBeamed } from "react-icons/bs";
import ItemDetailReview from "./ItemDetailReview";
import ItemCheck from "./ItemCheck";
import { postHearts } from "../../store/hearts/heartsSlice";
import { Link } from "react-router-dom";

export default function ItemDetail() {
  const [inputList, setInputList] = useState([]);
  const param = useParams();
  const { data } = useSelector((state) => state.itemDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getItemDetail(param.id));
  }, []);

  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      i <= grade ? array.push(<BsStarFill />) : array.push(<BsStar />);
    }
    return array;
  };

  const optionChange = (e) => {
    const input = { option: e.target.value, count: 1, itemId: param.id };
    if (inputList.some((e) => e.option === input.option)) {
      alert("이미 선택하신 옵션입니다.");
      return;
    }
    setInputList([...inputList, input]);
  };

  const onSubmit = (e) => {
    localStorage.getItem("token")
      ? inputList.length < 1
        ? alert("옵션을 선택해주세요.")
        : dispatch(
            postHearts(inputList),
            window.confirm(
              "장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?"
            ) && navigate("/hearts")
          )
      : navigate("/login");
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link
                  to={`/items/${data.categoryId}?category=${data.categoryName}`}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {data.categoryName} &gt;
                </Link>
              </div>
            </li>
            <li className="text-sm">
              <a
                href=""
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {data.itemName}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 h-100">
          <div className="w-full h-full flex justify-center">
            <img src={data.itemImage} className="h-full w-10/12 object-fill" />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data.itemName}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {data.itemPrice}원
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex">
                  {gradeIcons(data.grade).map((el, idx) => (
                    <div key={idx} className="text-amber-500 text-xl">
                      {el}
                    </div>
                  ))}
                </div>
                <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {data.reviewCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10" onSubmit={onSubmit}>
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">옵션</h3>
                </div>
                <div className="h-12">
                  <select
                    className="w-full h-full mt-2 border border-gray-400 rounded"
                    onChange={optionChange}
                    // value={input.option}
                  >
                    <option value={""}>
                      ---------------- 옵션을 선택해주세요. ----------------
                    </option>
                    {data?.itemOption?.map((el) => (
                      <option
                        key={el.option}
                        value={el.option}
                        className="text-lg"
                      >
                        {el.option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* 주문 확인 부분 */}

              {inputList && (
                <div>
                  <ItemCheck
                    inputList={inputList}
                    setInputList={setInputList}
                    price={data.itemPrice}
                  />
                </div>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                장바구니에 담기
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
              <div className="space-y-6">
                <pre className="whitespace-pre-wrap break-all overflow-auto text-gray-900">
                  {data.itemInfo}
                </pre>
              </div>
            </div>
          </div>
        </div>
        {data.reviews && (
          <div className="flex justify-center">
            <ItemDetailReview reviews={data.reviews} />
          </div>
        )}
      </div>
    </div>
  );
}
