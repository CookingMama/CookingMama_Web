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
