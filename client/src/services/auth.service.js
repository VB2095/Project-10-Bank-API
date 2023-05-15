import Axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

const register = (username, email, password) => {
  return Axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = async (email, password) => {
  const response = await Axios.post(API_URL + "login", {
    email,
    password,
  });
  if (response.data.accessToken) {
    console.log("response.data.accessToken", response.data.accessToken);
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log("Response:", response.data);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
console.log(getCurrentUser());
console.log(localStorage.getItem("user"));
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
