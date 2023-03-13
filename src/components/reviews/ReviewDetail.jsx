import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  getReviewDetail,
  setFalse,
  setTrue,
} from "../../store/reviews/reviewSlice";
import { BsStarFill, BsStar } from "react-icons/bs";

export default function ReviewDetail() {
  const { data, isOpen, itemId, userId } = useSelector((state) => state.review);
  const dispatch = useDispatch();

  useEffect(() => {
    itemId && userId && dispatch(getReviewDetail({ itemId, userId }));
  }, []);

  const gradeIcons = (grade) => {
    const array = [];
    for (let i = 1; i <= 5; i++) {
      i <= grade ? array.push(<BsStarFill />) : array.push(<BsStar />);
    }
    return array;
  };

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(setTrue())}
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
              <div className="h-auto w-4/5 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
                <div className="bg-white  px-5 pt-3 pb-4">
                  <div className="flex justify-between">
                    <div className="flex pt-5 mt-3 h-1/5 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                      <div className="ml-6">
                        <div
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          {data?.userName}
                        </div>
                        <div className="flex">
                          {gradeIcons(data.grade).map((el, idx) => (
                            <div
                              key={idx}
                              className="text-amber-500 text-xl mb-3"
                            >
                              {el}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => dispatch(setFalse())}
                      className="text-4xl text-end mb-5 hover:cursor-pointer"
                    >
                      x
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="mt-2 flex justify-center text-left h-3/5">
                    <div className="text-xl w-4/5">{data.content}</div>
                  </div>
                </div>

                <div className="flex justify-center px-4 py-3 "></div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
