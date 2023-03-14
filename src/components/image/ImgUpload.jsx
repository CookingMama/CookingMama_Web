import { BsCameraFill } from "react-icons/bs";

const ImgUpload = ({ loaded, fileURL, imageChange }) => {
  return (
    <>
      <div className="flex justify-center">
        {loaded === true ? (
          <img src={fileURL} className="w-48 h-48"></img>
        ) : (
          <div className="flex justify-center items-center text-5xl w-48 h-48 bg-gray-400">
            <BsCameraFill />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <label
          htmlFor="imageInput"
          className="text-sm font-bold bg-cyan-300 mt-3 py-3 px-5 rounded-md shadow-sm shadow-cyan-900 hover:cursor-pointer focus:shadow-none"
        >
          사진 선택
          <input
            id="imageInput"
            className="hidden"
            type="file"
            accept="image/jpg,image/jpeg"
            onChange={(e) => {
              imageChange(e);
            }}
          />
        </label>
      </div>
    </>
  );
};
export default ImgUpload;
