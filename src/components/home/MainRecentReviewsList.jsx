import { BsStarFill, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  setItemIds,
  setTrue,
  setUserIds,
} from "../../store/reviews/reviewSlice";
import ReviewDetail from "../reviews/ReviewDetail";

const MainRecentReviewList = ({
  myItemId,
  myUserId,
  itemName,
  userName,
  grade,
  image,
  content,
}) => {
  const dispatch = useDispatch();
  const { itemId, userId } = useSelector((state) => state.review);
  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      i <= grade ? array.push(<BsStarFill />) : array.push(<BsStar />);
    }
    return array;
  };

  const setData = () => {
    dispatch(setItemIds(myItemId));
    dispatch(setUserIds(myUserId));
    dispatch(setTrue());
  };

  return (
    <div className="flex flex-wrap my-5 justify-center">
      {myItemId === itemId && myUserId === userId && <ReviewDetail />}
      <div className="mx-5 w-40 min-w-10 min-h-10 bg-gray-200 group-hover:opacity-75 rounded">
        <img src={image} alt={image} className="object-fill" />
      </div>
      <div className="flex flex-col max-w-10 min-w-12">
        <div
          onClick={setData}
          className="text-xl font-bold mb-5 hover:cursor-pointer"
        >
          {itemName}
        </div>
        <div className="flex">
          {gradeIcons(grade).map((el, idx) => (
            <div key={idx} className="text-amber-500">
              {el}
            </div>
          ))}
        </div>
        <div className="flex mb-5">{userName}</div>
        <div className="text-left">{content}</div>
      </div>
    </div>
  );
};

export default MainRecentReviewList;
