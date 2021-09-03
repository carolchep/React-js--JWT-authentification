import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
//register(): POST {username, email, password}
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
//login(): POST {username, password} & save JWT to Local Storage
const login = (username, password) => {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
//logout(): remove JWT from Local Storage

  const logout = () => {
    localStorage.removeItem("user");
  };
  //getCurrentUser(): get stored user information (including JWT)

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
 //eslint-disable-next-line import/no-anonymous-default-export
 export default {
    register,
    login,
    logout,
    getCurrentUser,
  };