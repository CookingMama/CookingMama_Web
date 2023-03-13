import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/user/userSlice";

export default function Login() {
  const { data, error, status } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    userEmail: "",
    userPw: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  useEffect(() => {
    if (status === "successed" && data.token) navigate("/");
    if (status === "failed") alert("이메일 또는 비밀번호가 잘못되었습니다.");
  }, [status, data]);

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-200">
        <div className="bg-white p-5 rounded-t-md rounded-b-md">
          <h1 className="flex justify-center text-4xl">로그인</h1>
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
                    value={user.userEmail}
                    required
                    className="text-center relative block w-96 appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="ml-9 w-32 relative block appearance-none rounded-t-2xl rounded-b-2xl border px-3 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  로그인
                </button>
                <Link
                  to={"/signup"}
                  className="flex justify-center mr-9 w-32 relative appearance-none rounded-t-2xl rounded-b-2xl border px-3 py-2 text-black bg-gray-400 sm:text-sm"
                >
                  회원가입
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
