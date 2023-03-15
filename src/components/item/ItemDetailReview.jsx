import { BsStarFill, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { imagePath } from "../../api/api";
import {
  setItemIds,
  setTrue,
  setUserIds,
} from "../../store/reviews/reviewSlice";
import ReviewDetail from "../reviews/ReviewDetail";

const ItemDetailReview = (reviews) => {
  const { itemId, userId } = useSelector((state) => state.review.detailReview);
  const dispatch = useDispatch();
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
    <div className="border border-t-slate-500 w-10/12 pt-4">
      {reviews?.reviews?.map((el, idx) => (
        <div key={idx} className="flex justify-between">
          {el.itemId === itemId && el.userId === userId && <ReviewDetail />}
          <div className="flex">
            <div>
              <img src={imagePath(el.image)} className="w-36 h-36" />
            </div>
            <div className="ml-3">
              <div>{el.userName}</div>
              <div className="flex">
                {gradeIcons(el.grade).map((el, idx) => (
                  <div key={idx} className="text-amber-500 text-xl mb-3">
                    {el}
                  </div>
                ))}
              </div>
              <p
                onClick={() => setData(el.itemId, el.userId)}
                className="hover:text-gray-400 border hover:border-b-gray-500 hover:cursor-pointer"
              >
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
      ))}
    </div>
  );
};

export default ItemDetailReview;
