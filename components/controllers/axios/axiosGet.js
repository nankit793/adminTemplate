import axios from "axios";
import Cookies from "js-cookie";

const axiosGet = async (props) => {
  try {
    const baseURL = process.env.BASE_URL;
    const publicBase = process.env.PUBLIC_BASE;
    console.log(publicBase);
    const result = await axios.get(
      `${baseURL}/${publicBase}/${props.url}`,
      props.body,
      {
        headers: {
          refreshToken: Cookies.get("refreshToken"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
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
