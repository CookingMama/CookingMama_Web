import MainBestReview from "./MainBestReview";
import MainRecentReview from "./MainRecentReview";

const MainReview = ({ data }) => {
  return (
    <div className="">
      {data && (
        <div className="flex justify-between flex-wrap">
          <MainBestReview bestReview={data.bestReview} />
          <MainRecentReview reviews={data.reviews} />
        </div>
      )}
    </div>
  );
};

export default MainReview;
