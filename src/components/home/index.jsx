import MainItem from "./MainItem";
import MainReview from "./MainReview";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div id="homeItemList" className="flex flex-wrap justify-between my-4">
          <MainItem />
          <MainItem />
          <MainItem />
          <MainItem />
        </div>
      </div>
      <div id="homeReview">
        <MainReview />
      </div>
    </div>
  );
};

export default Home;
