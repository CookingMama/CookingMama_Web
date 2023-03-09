import { useSelector } from "react-redux";
import { BsStarFill, BsStar } from "react-icons/bs";

const MainBestReview = ({ bestReview }) => {
  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= grade) array.push(<BsStarFill />);
      else array.push(<BsStar />);
    }
    return array;
  };

  return (
    <div className="w-1/2 min-w-100 ">
      <div className="text-2xl font-bold mb-5">Best Review</div>
      <div className="flex flex-wrap justify-center pb-28">
        <div className="mx-5 w-5/12 min-w-12 bg-gray-200 group-hover:opacity-75 rounded">
          <img
            src={bestReview.image}
            alt={bestReview.image}
            className="object-fill"
          />
        </div>
        <div className="flex flex-col w-5/12 min-w-12">
          <div className="text-2xl font-bold mb-5">{bestReview.itemName}</div>
          <div className="flex">
            {gradeIcons(bestReview.grade).map((el, idx) => (
              <div key={idx} className="text-amber-500 text-xl">
                {el}
              </div>
            ))}
          </div>
          <div className="flex mb-5">{bestReview.userName}</div>
          <div className="text-left text-lg">{bestReview.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBestReview;
