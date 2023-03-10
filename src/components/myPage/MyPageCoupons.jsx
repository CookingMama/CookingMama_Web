import { useSelector } from "react-redux";

const MyPageCoupons = () => {
  const { data } = useSelector((state) => state.coupons);

  return (
    <div>
      <div className="bg-white p-2 rounded-lg m-3 flex flex-col justify-center">
        <h1 className="text-xl font-semibold mb-3 ml-5">보유 쿠폰 내역</h1>
        <table>
          <thead className="border-b-2 border-b-black whitespace-nowrap text-lg">
            <tr>
              <th className="ml-10 mr-10">쿠폰명</th>
              <th className="ml-10 mr-10">할인율</th>
              <th className="ml-10 mr-10">사용유무</th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap text-center">
            {data.map((el) => (
              <tr key={el.id}>
                <td className="pl-5 pr-5 pt-3">{el.couponName}</td>
                <td className="pl-5 pr-5 pt-3">{el.couponPercentage}%</td>
                <td className="pl-5 pr-5 pt-3">
                  {el.status === 0 ? "미사용" : "사용 완료"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default MyPageCoupons;
