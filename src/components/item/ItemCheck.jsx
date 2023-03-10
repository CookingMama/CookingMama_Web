import { useEffect, useState } from "react";

const ItemCheck = ({ inputList, setInputList, price }) => {
  const increment = (option) => {
    const updateInput = inputList.map((el) =>
      el.option === option
        ? { option: el.option, count: el.count + 1, itemId: el.itemId }
        : el
    );
    setInputList(updateInput);
  };

  const decrement = (option) => {
    const updateInput = inputList.map((el) =>
      el.option === option
        ? { option: el.option, count: el.count - 1, itemId: el.itemId }
        : el
    );

    setInputList(updateInput);
  };

  const onChageHandler = (e, option) => {
    const updateInput = inputList.map((el) =>
      el.option === option
        ? {
            option: el.option,
            count: Number(e.target.value) === 0 ? 1 : Number(e.target.value),
            itemId: el.itemId,
          }
        : el
    );
    setInputList(updateInput);
  };

  const removeItem = (option) => {
    const updateInput = inputList.filter((el) => el.option !== option);
    setInputList(updateInput);
  };

  return (
    <div>
      <div className="mt-2 border border-gray-500 bg-gray-100">
        {inputList?.map((data, idx) => (
          <div key={idx} className="p-3 border">
            <div className="flex justify-between text-lg">
              <div className="w-1/3">{data.option}</div>
              <div className="flex w-1/3 justify-center">
                <button
                  type="button"
                  onClick={() => decrement(data.option)}
                  className="w-3/12 bg-slate-300 rounded hover:bg-slate-400"
                  disabled={data.count <= 1 && "disabled"}
                >
                  -
                </button>
                <div className="w-3/12 text-center border border-y-slate-500">
                  <input
                    type="number"
                    value={data.count}
                    onChange={(e) => onChageHandler(e, data.option)}
                    className="w-full inline-block text-center"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => increment(data.option)}
                  className="w-3/12 bg-slate-300 rounded hover:bg-slate-400"
                >
                  +
                </button>
              </div>
              <div className="w-1/3 flex justify-end">
                <div className="text-lg text-slate-500">
                  {data.count * price}원
                </div>
                <div
                  onClick={() => removeItem(data.option)}
                  className="hover:cursor-pointer w-1/5 text-end"
                >
                  x
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border flex justify-between font-bold">
        <div>총 상품 금액</div>
        <div>
          {inputList &&
            inputList.reduce(
              (sum, currValue) => sum + currValue.count * price,
              0
            )}
          원
        </div>
      </div>
    </div>
  );
};

export default ItemCheck;
