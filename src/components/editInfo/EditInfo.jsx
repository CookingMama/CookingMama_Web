import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getInfo, putInfo } from "../../store/editInfo/editInfoSlice";

const EditInfo = () => {
  const { data } = useSelector((state) => state.editInfo);

  const [user, setUser] = useState({
    userEmail: "",
    userPw: "",
    userName: "",
    userPhoneNumber: "",
    userBirth: "",
    userZipcode: "",
    userAddress: "",
    userAddressDetail: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  useEffect(() => {
    setUser({
      ...user,
      userEmail: data.userEmail,
      userPw: data.userPw,
      userName: data.userName,
      userBirth: data.userBirth,
      userPhoneNumber: data.userPhoneNumber,
      userZipcode: data.userZipCode,
      userAddress: data.userAddress,
      userAddressDetail: data.userAddressDetail,
    });
  }, [data]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(putInfo(user));
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-200">
        <div className="bg-white p-5 rounded-t-md rounded-b-md w-full">
          <h1 className="flex justify-center text-4xl">회원 가입</h1>
          <div className="bg-sky-200 float-left rounded-lg white w-3/12 h-100 "> 
            <div className="flex justify-center whitespace-nowrap">
              <Link
                to={"/orderhistory"}
                className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
              >
                주문내역조회
              </Link>
            </div>
            <div className="flex float-center whitespace-nowrap">
              <Link
                to={"/coupons"}
                className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
              >
                보유 쿠폰 조회
              </Link>
            </div>
            <div className="flex justify-center whitespace-nowrap">
              <Link
                to={"/reviews"}
                className="mt-5 rounded-t-2xl rounded-b-2xl  p-16 py-2 text-black bg-gray-400 sm:text-sm"
              >
                나의 리뷰 조회
              </Link>
            </div>
          </div>
          <div className="w-8/12 max-w-md space-y-8 bg-sky-200 p-6 rounded-t-md roundede-b-md pt-0 float-right">
            <form className="mt-8 space-y-6" method="POST" onSubmit={onSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                {/* 이메일 */}
                <div className="mb-1 pt-5">
                  <h1 className="mb-1">이메일</h1>
                  <label htmlFor="userEmail" className="sr-only">
                    userEmail
                  </label>
                  <input
                    id="userEmail"
                    name="userEmail"
                    value={data.userEmail}
                    disabled
                    required
                    className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10  sm:text-sm bg-gray-300"
                    placeholder={data.userEmail}
                    onChange={onChangeHandler}
                  />
                </div>
                {/* 비밀번호 */}
                <div className="mb-1">
                  <h1 className="mb-1">비밀번호</h1>
                  <label htmlFor="userPw" className="sr-only">
                    Password
                  </label>
                  <input
                    id="userPw"
                    name="userPw"
                    type="password"
                    autoComplete="current-password"
                    className="mb-1 text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder={data.userPw}
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                {/* 이름 & 생년월일 */}
                <div className="flex justify-between mb-1">
                  {/* 이름 */}
                  <div className="float-left w-52 mb-1">
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
                  {/* 생년월일 */}
                  <div className="float-right w-52 mb-1">
                    <h1 className="w-full mb-1">생년월일</h1>
                    <label htmlFor="userBirth" className="sr-only">
                      Name
                    </label>
                    <input
                      id="userBirth"
                      name="userBirth"
                      className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder={data.userBirth}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </div>
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
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="w-32 relative block appearance-none rounded-t-2xl rounded-b-2xl border px-3 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  수정하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditInfo;
