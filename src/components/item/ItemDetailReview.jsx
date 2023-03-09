import { BsStarFill, BsStar } from "react-icons/bs";

const ItemDetailReview = (reviews) => {
  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= grade) array.push(<BsStarFill />);
      else array.push(<BsStar />);
    }
    return array;
  };
  return (
    <div className="border border-t-slate-500 w-10/12 pt-4">
      {reviews?.reviews?.map((el, idx) => (
        <div key={idx} className="flex justify-between">
          <div className="flex">
            <div>
              <img src={el.image} className="w-36 h-36" />
            </div>
            <div className="ml-3">
              <div>{el.userName}</div>
              <div className="flex">
                {gradeIcons(el.grade).map((el, idx) => (
                  <div key={idx} className="text-amber-500 text-xl mb-3">
                    {el}
                  </div>
                ))}
              </div>
              <p className="hover:text-gray-400 border hover:border-b-gray-500">
                {el.content}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center mr-10">
            <div>
              <p>{el.createdAt.substring(0, 10)}</p>
              <p>{el.createdAt.substring(11, 19)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemDetailReview;
