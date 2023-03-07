import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
export const api = async (method, url, data) => {
  const response = await axios({
    method,
    data,
    url,
  });
  return response;
};
