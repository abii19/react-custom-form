const getLocalAccessToken = () => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};

const removeToken = () => {
  localStorage.removeItem("token");
};

const TokenService = {
  getLocalAccessToken,
  removeToken,
};
export default TokenService;
