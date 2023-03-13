import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getItemListByCategory } from "../../store/item/itemListCategorySlice";
import { BsFillChatSquareHeartFill, BsStarFill } from "react-icons/bs";
import queryString from "query-string";

const ItemCategoryList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.itemListByCategory);
  const param = useParams();
  const location = useLocation();
  const categoryName = queryString.parse(location.search);

  useEffect(() => {
    dispatch(getItemListByCategory(param.categoryId));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {categoryName.category}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-sky-200 p-5 rounded-xl">
          {data?.map((el) => (
            <div key={el.id} className="group relative hover:cursor-pointer">
              <Link to={`/itemdetail/${el.id}`}>
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={el.itemImage}
                    alt={el.itmeImage}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {el.itemName}
                    </h3>
                    <div className="flex items-center mt-1 text-lg text-gray-500">
                      <div>
                        <BsStarFill className="text-amber-500" />
                      </div>
                      <div className="ml-1">{el.grade}</div>/5
                      <div className="mx-2 text-sm">|</div>
                      <div>리뷰 {el.reviewCount}</div>
                    </div>
                  </div>
                  <p className="text-xl font-medium text-gray-900">
                    {el.itemPrice}
                    <span className="font-thin">원</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCategoryList;
