import { BsFillChatSquareHeartFill } from "react-icons/bs";

const MainItemList = ({ id, name, image, adminName, price, reviewCount }) => {
  return (
    <div key={id} className="py-2 max-w-11">
      <div className="w-44 h-36 bg-gray-200 group-hover:opacity-75">
        <div className="w-full h-full">
          <img src={image} alt={image} className="object-fill" />
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="my-1 text-sm text-gray-700">
            <a href="/#">
              <span aria-hidden="true" className="inset-0" />
              {name}
            </a>
          </h3>
          <p className="text-xs text-gray-500 overflow-hidden">{adminName}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
        <div className="flex justify-between w-1/6">
          <span>
            <BsFillChatSquareHeartFill className="text-red-600" />
          </span>
          <p className="float-left text-sm text-gray-900">{reviewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default MainItemList;
