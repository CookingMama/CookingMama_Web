import MainBestReview from "./MainBestReview";
import MainRecentReview from "./MainRecentReview";

const MainReview = () => {
  return (
    <div className="flex justify-center">
      <div>
        <MainBestReview />
        <div>
          <MainRecentReview />
        </div>
      </div>
    </div>
  );
};

export default MainReview;
