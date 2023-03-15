import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  PostReview,
  setWriteFalse,
  setWriteTrue,
} from "../../store/reviews/reviewSlice";
import ImgUpload from "../image/ImgUpload";
import { useNavigate } from "react-router-dom";

const ReviewWrite = ({ itemName, itemId }) => {
  const [loaded, setLoaded] = useState(false);
  const [fileURL, setFileURL] = useState("");
  const [writeReview, setWriteReview] = useState({
    itemId: 0,
    content: "",
    image: null,
    imageName: "",
    grade: 0,
  });

  const { writeIsOpen, error, status } = useSelector(
    (state) => state.review.detailReview
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setWriteReview({ ...writeReview, itemId: itemId });
  }, [itemId]);

  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      i <= grade ? array.push(<BsStarFill />) : array.push(<BsStar />);
    }
    return array;
  };

  const setInput = (e) => {
    const { name, value } = e.target;
    if (name === "grade")
      setWriteReview({ ...writeReview, [name]: Number(value) });
    else setWriteReview({ ...writeReview, [name]: value });
  };

  const imageChange = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    const file = e.target.files[0];
    setWriteReview({
      ...writeReview,
      image: e.target.files[0],
      imageName: e.target.files[0].name,
    });
    if (file) {
      setLoaded("loading");
      fileReader.readAsDataURL(file);
    }
    fileReader.onload = () => {
      setFileURL(fileReader.result);
      setLoaded(true);
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(PostReview(writeReview));
      if (window.confirm("리뷰가 등록되었습니다! 확인하시겠습니까?")) {
        navigate(`/itemdetail/${itemId}`);
      }
    } catch {
      alert(error);
    }
  };

  return (
    <Transition.Root show={writeIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(setWriteTrue())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-sky-300 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <form
                onSubmit={onSubmit}
                className="h-100 min-h-100 w-4/5 transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all "
              >
                <div className="">
                  <div
                    onClick={() => dispatch(setWriteFalse())}
                    className="text-5xl my-5 mx-7 text-end hover:cursor-pointer"
                  >
                    x
                  </div>
                </div>
                <div className="bg-white h-2/6 px-5 pb-4">
                  <div className="flex justify-center w-full h-full">
                    <div className="flex flex-col justify-between pt-5 mt-3 text-center">
                      <div
                        as="h3"
                        className="text-3xl font-semibold leading-6 text-gray-900"
                      >
                        {itemName}에 대한 별점을 남겨주세요!!!
                      </div>
                      <div className="flex justify-center relative bottom-0">
                        {gradeIcons(writeReview.grade).map((el, idx) => (
                          <div key={idx} className="mx-1">
                            <input
                              id={`grade${idx + 1}`}
                              name="grade"
                              type="radio"
                              value={idx + 1}
                              onChange={setInput}
                              hidden
                            />
                            <label
                              htmlFor={`grade${idx + 1}`}
                              className="text-amber-500 text-6xl mb-3 hover:cursor-pointer"
                            >
                              {el}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col justify-center mt-5 w-full h-4/6 px-24 text-center">
                    <div className="text-2xl pb-3 font-semibold leading-6 text-gray-900">
                      자세한 리뷰를 남겨주세요!!!
                    </div>
                    <textarea
                      name="content"
                      onChange={setInput}
                      className="text-xl min-h-11 h-full w-full border border-black resize-none"
                    />
                    <div className="text-2xl pb-3 mt-5 font-semibold leading-6 text-gray-900">
                      사진을 남겨주세요!!!
                    </div>
                    <div className="flex flex-col justify-center">
                      <ImgUpload
                        imageChange={imageChange}
                        fileURL={fileURL}
                        loaded={loaded}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="my-5 h-14 w-28 border rounded-lg bg-cyan-300 shadow-md shadow-sky-900 focus:shadow-none"
                      >
                        등록
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ReviewWrite;
