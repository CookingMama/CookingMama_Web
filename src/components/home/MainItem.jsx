import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHome } from "../../store/main/userHomeSlice";
import MainItemList from "./MainItemList";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://t1.daumcdn.net/cfile/tistory/2463694C53D0A5D806",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function MainItem({ data, categoryName }) {
  //   const [items, setItems] = useState;

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
