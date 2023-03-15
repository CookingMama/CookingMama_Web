import { useEffect, useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { imagePath } from "../../api/api";
import {
  getMyReview,
  setItemIds,
  setTrue,
  setUserIds,
} from "../../store/reviews/reviewSlice";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
  const [toReview, setToReview] = useState({
    itemId: 0,
    itemName: "",
  });
  const { data } = useSelector((state) => state.review.myReview);
  const { itemId, userId } = useSelector((state) => state.review.detailReview);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyReview());
  }, []);

  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      i <= grade ? array.push(<BsStarFill />) : array.push(<BsStar />);
    }
    return array;
  };

  const setData = (itemId, userId) => {
    dispatch(setItemIds(itemId));
    dispatch(setUserIds(userId));
    dispatch(setTrue());
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 bg-sky-200">
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
          <div className="bg-sky-200 w-10/12 rounded-md float-right p-3">
            <div className="bg-white p-6 rounded-t-md rounded-b-md ">
              <div className="rounded-md w-auto">
                {data?.map((el, idx) => (
                  <div key={idx}>
                    {el.itemId === itemId && el.userId === userId && (
                      <ReviewDetail />
                    )}
                    <div
                      className="flex justify-between hover:cursor-pointer my-3"
                      onClick={() => setData(el.itemId, el.userId)}
                    >
                      <div className="flex">
                        <div>
                          <img
                            src={imagePath(el.image)}
                            className="w-36 h-36"
                          />
                        </div>
                        <div className="ml-3">
                          <div>{el.userName}</div>
                          <div className="flex">
                            {gradeIcons(el.grade).map((el, idx) => (
                              <div
                                key={idx}
                                className="text-amber-500 text-xl mb-3"
                              >
                                {el}
                              </div>
                            ))}
                          </div>
                          <p className="hover:text-gray-400 border border-white hover:border-b-gray-500 hover:cursor-pointer">
                            {el.content}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center text-center mr-10">
                        <div>
                          <p>{el.createdAt.split("T")[0]}</p>
                          <p>{el.createdAt.split("T")[1].split(".")[0]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
