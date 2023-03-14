import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderPageMyAddress = () => {
  const { data } = useSelector((state) => state.editInfo);

  const onChangeHandler = (e) => {};

  return (
    <div className="rounded-md flex flex-col m-3">
      <h1 className="flex justify-start text-2xl mt-0">배송지 정보</h1>
      {/* 이름 */}
      <div className="float-left mb-1">
        <h1 className="w-full mb-1">이름</h1>
        <label htmlFor="userName" className="sr-only">
          Name
        </label>
        <input
          id="userName"
          name="userName"
          className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder={data.userName}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      {/* 연락처 */}
      <div className="mb-1">
        <h1 className="mb-1">연락처</h1>
        <label htmlFor="userPhoneNumber" className="sr-only">
          Name
        </label>
        <input
          id="userPhoneNumber"
          name="userPhoneNumber"
          className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder={data.userPhoneNumber}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      {/* 주소 */}
      <div>
        <div className="mb-1">
          <h1 className="mb-1">주소</h1>
          <div className="flex">
            <label htmlFor="userZipcode" className="sr-only">
              userZipcode
            </label>
            <input
              id="userZipcode"
              name="userZipcode"
              className="text-center float-left relative block w-52 appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder={data.userZipCode}
              onChange={(e) => onChangeHandler(e)}
            />
            <button className="float-right left-2 w-28 relative block appearance-none rounded-t-2xl rounded-b-2xl border border-gray- px-3 py-2 text-gray-900 bg-gray-400 placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              우편번호 검색
            </button>
          </div>
        </div>
        <div className="mb-1">
          <label htmlFor="userAddress" className="sr-only">
            userAddress
          </label>
          <input
            id="userAddress"
            name="userAddress"
            className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder={data.userAddress}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="userAddressDetail" className="sr-only">
            userAddressDetail
          </label>
          <input
            id="userAddressDetail"
            name="userAddressDetail"
            className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
            placeholder={data.userAddressDetail}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderPageMyAddress;
