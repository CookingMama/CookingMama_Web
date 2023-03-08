import { BsStarFill, BsStar } from "react-icons/bs";

const MainRecentReviewList = ({
  itemName,
  userName,
  grade,
  image,
  content,
}) => {
  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= grade) array.push(<BsStarFill />);
      else array.push(<BsStar />);
    }
    return array;
  };

  return (
    <div className="flex flex-wrap my-5 justify-center">
      <div className="mx-5 w-40 min-w-10 min-h-10 bg-gray-200 group-hover:opacity-75 rounded">
        <img src={image} alt={image} className="object-fill" />
      </div>
      <div className="flex flex-col max-w-10 min-w-12">
        <div className="text-xl font-bold mb-5">{itemName}</div>
        <div className="flex">
          {gradeIcons(grade).map((el, idx) => (
            <div key={idx} className="text-amber-500">
              {el}
            </div>
          ))}
        </div>
        <div className="flex mb-5">{userName}</div>
        <div className="text-left">{content}</div>
      </div>
    </div>
  );
};

export default MainRecentReviewList;
