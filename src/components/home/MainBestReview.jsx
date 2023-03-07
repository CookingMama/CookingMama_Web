const data = {
  id: 1,
  name: "Basic Tee",
  content: "매우 좋은 상품입니다 꼭 한번 ...",
  grade: 4.7,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  imageAlt: "Front of men's Basic Tee in black.",
};

const MainBestReview = () => {
  return (
    <div className="flex">
      <div className="">
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className="object-fill w-32 h-40"
        />
      </div>
      <div className="flex flex-col">
        <div>{data.name}</div>
        <div className="mb-5">{data.grade}</div>
        <div>{data.content}</div>
      </div>
    </div>
  );
};

export default MainBestReview;
