import axios from "axios";

const axiosPost = async (props) => {
  try {
    const baseURL = process.env.BASE_URL;
    console.log(baseURL);
    const result = await axios.post(`${baseURL}/${props.url}`, props.body, {
      headers: {
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
  axiosPost,
};
