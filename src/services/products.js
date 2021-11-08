import axios from "axios";
const api = process.env.REACT_APP_URL_API || "http://localhost:5000/api/";

export const searchProduct = async (searchText) => {
  try {
    const response = await axios.get(`${api}items?q=${searchText}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${api}items/${id}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
};
