import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserHome } from "../../store/main/userHomeSlice";
import { setWriteTrue } from "../../store/reviews/reviewSlice";
import ReviewWrite from "../reviews/ReviewWrite";
import MainItem from "./MainItem";
import MainReview from "./MainReview";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.userHome);
  const navigate = useNavigate();

  const getUserHomeList = () => {
    dispatch(getUserHome());
  };

  useEffect(() => {
    getUserHomeList();
  }, []);

  const toItemList = (categoryId, categoryName) => {
    navigate(`/items/${categoryId}?category=${categoryName}`);
  };

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
              <div className="py-1 m-3 min-h-105 rounded-xl bg-sky-200 shadow-sm shadow-cyan-900">
                <div className="text-2xl my-3 font-bold tracking-tight text-gray-900">
                  {el.name}
                </div>
                <MainItem data={data.items} categoryName={el.name} />
                <button
                  type="button"
                  onClick={() => toItemList(el.id, el.name)}
                  className="rounded bg-cyan-600 p-3 shadow shadow-cyan-900 focus:shadow-none mt-5"
                >
                  더보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-center">
        {" "}
        <div
          id="homeReview"
          className="w-10/12 min-w-12 rounded-xl bg-sky-200 shadow shadow-cyan-900"
        >
          {data.bestReview !== undefined &&
          data.bestReview.itemId !== null &&
          data.reviews !== null ? (
            <>
              <div className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                Reviews
              </div>
              <MainReview data={data} />
            </>
          ) : (
            <div className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              등록 된 리뷰가 없습니다!!!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
