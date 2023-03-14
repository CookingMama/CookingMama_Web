import { imagePath } from "../../api/api";
import MainRecentReviewList from "./MainRecentReviewsList";

const MainRecentReview = ({ reviews }) => {
  return (
    <div className="w-1/2 min-w-12 flex justify-between flex-col flex-wrap">
      {reviews?.slice(0, 3).map((el, idx) => (
        <MainRecentReviewList
          key={idx}
          myItemId={el.itemId}
          myUserId={el.userId}
          itemName={el.itemName}
          userName={el.userName}
          grade={el.grade}
          image={imagePath(el.image)}
          content={el.content}
        />
      ))}
    </div>
  );
};

export default MainRecentReview;
