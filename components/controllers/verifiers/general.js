const emailVerification = (username) => {
  if (username) {
    return true;
  }
  return false;
};

const passwordVerification = (password) => {
  if (password.length >= 6) {
    return true;
  }
  return false;
};

module.exports = {
  emailVerification,
  passwordVerification,
};
