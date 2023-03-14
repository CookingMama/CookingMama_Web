import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export default function SignUp() {
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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await api("POST", "/user/signup", user);
    console.log(response);
    console.log(response.status);
    if (response.status === 200) {
      alert("가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-200">
        <div className="bg-white p-5 rounded-t-md rounded-b-md">
          <h1 className="flex justify-center text-4xl">회원 가입</h1>
          <div className="w-full max-w-md space-y-8 bg-sky-200 p-6 rounded-t-md roundede-b-md pt-0">
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
                    type={"email"}
                    required
                    className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="test@test.com"
                    onChange={(e) => onChangeHandler(e)}
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
                    required
                    className="mb-1 text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
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
                      required
                      className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="홍길동"
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
                      required
                      className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="19990101"
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
                    required
                    className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="01012345678"
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
                        required
                        className="text-center float-left relative block w-52 appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="우편번호"
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
                      required
                      className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="주소"
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
                      required
                      className="text-center relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
                      placeholder="상세주소"
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
                  회원 등록
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
