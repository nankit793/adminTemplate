import axios from "axios";
import Cookies from "js-cookie";

const axiosGet = async (props) => {
  try {
    // const baseURL = process.env.BASE_URL;
    const baseURL = "http://localhost:5000";
    // const publicBase = process.env.PUBLIC_BASE;
    const result = await axios.get(`${baseURL}/${props.url}`, {
      headers: {
        ...props.headers,
        refreshToken: Cookies.get("refreshToken"),
        username: Cookies.get("username"),
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (result && result.status === 200 && result.data) {
      return { result, data: result.data, state: true };
    }
    return null;
  } catch (error) {
    if (error && error.response && error.response.data) {
      return { res: error.response, data: error.response.data, state: false };
    }
    return null;
  }
};

module.exports = {
  axiosGet,
};
