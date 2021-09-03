//Now we define a service for accessing data in services/user.service.js:

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

//You can see that we add a 
//npm strtHTTP header with the help of authHeader() function when requesting authorized resource.