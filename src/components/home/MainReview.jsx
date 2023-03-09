import MainBestReview from "./MainBestReview";
import MainRecentReview from "./MainRecentReview";

const MainReview = ({ data }) => {
  return (
    <div className="">
      <div className="flex justify-between flex-wrap">
        <MainBestReview bestReview={data.bestReview} />
        <MainRecentReview reviews={data.reviews} />
      </div>
    </div>
  );
};

export default MainReview;
