import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHome } from "../../store/main/userHomeSlice";
import MainItemList from "./MainItemList";

export default function MainItem({ data, categoryName }) {
  return (
    <div className="text-center">
      <div className="">
        <div className="">
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2">
            {data
              .filter((el) => el.categoryName === categoryName)
              .slice(0, 4)
              .map((data) => (
                <MainItemList
                  key={data.id}
                  id={data.id}
                  adminName={data.adminName}
                  name={data.itemName}
                  image={data.itemImage}
                  price={data.itemPrice}
                  reviewCount={data.reviewCount}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
