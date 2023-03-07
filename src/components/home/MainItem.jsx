import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHome } from "../../store/items/userHomeSlice";
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

export default function MainItem() {
  //   const [items, setItems] = useState;
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.userHome);

  const getUserHomeList = async () => {
    dispatch(getUserHome());
  };

  useEffect(() => {
    getUserHomeList();
  }, []);
  return (
    <div className=" w-4/12 px-2 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        카테고리 이름
      </h2>
      <div className="my-5 rounded-xl mx-auto p-4 bg-sky-200">
        <div className="">
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2">
            {products.map((product) => (
              <MainItemList
                key={product.id}
                id={product.id}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                name={product.color}
                color={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
