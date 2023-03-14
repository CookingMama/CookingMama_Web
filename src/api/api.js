import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
export const api = async (method, url, data) => {
  const token = localStorage.getItem("token");
  const headers = token
    ? {
        Authorization: token,
      }
    : {};
  const response = await axios({
    method,
    data,
    url,
    headers,
  });
  return response;
};
export const apiReview = async (method, url, data) => {
  const token = localStorage.getItem("token");
  const headers = token
    ? {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      }
    : {};
  const formData = new FormData();
  formData.append("itemId", data.itemId);
  formData.append("content", data.content);
  formData.append("image", data.image);
  formData.append("imageName", data.imageName);
  formData.append("grade", data.grade);
  const response = await axios({
    method,
    data: formData,
    url,
    headers,
  });
  return response;
};

export const imagePath = (imageName) => {
  return (
    "https://firebasestorage.googleapis.com/v0/b/cookingmama-50483.appspot.com/o/" +
    imageName +
    "?alt=media"
  );
};
