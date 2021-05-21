import axios from "axios";

const API_URL = "http://localhost:3000/";

const getAll = () => {
  return axios.get(API_URL + "livraison/list");
};
export default {
  getAll,
};
