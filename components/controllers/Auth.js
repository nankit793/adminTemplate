import Cookies from "js-cookie";
const authChecker = () => {
  const Rtoken = Cookies.get("refreshToken");
  if (Rtoken) {
    return true;
  }
  return false;
};

module.exports = { authChecker };
