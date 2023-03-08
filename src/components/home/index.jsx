import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHome } from "../../store/main/userHomeSlice";
import MainItem from "./MainItem";
import MainReview from "./MainReview";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.userHome);

  const getUserHomeList = () => {
    dispatch(getUserHome());
  };

  useEffect(() => {
    getUserHomeList();
  }, []);

  return (
    <div>
      <div className="flex justify-center text-center">
        <div
          id="homeItemList"
          className="w-10/12 flex flex-wrap justify-between my-4"
        >
          {data?.categories?.map((el) => (
            <div
              className="w-4/12 min-w-12 flex flex-col flex-flow overflow-hidden justify-around"
              key={el.id}
            >
              <div className="py-1 m-3 min-h-100 rounded-xl bg-sky-200">
                <div className="text-2xl my-3 font-bold tracking-tight text-gray-900">
                  {el.name}
                </div>
                <MainItem data={data.items} categoryName={el.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-center">
        {data.bestReview && data.reviews && (
          <div
            id="homeReview"
            className="w-10/12 min-w-12 rounded-xl bg-sky-200 "
          >
            <div className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              Reviews
            </div>
            <MainReview data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
