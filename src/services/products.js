import axios from "axios";
const api = process.env.REACT_APP_URL_API;

export const searchProduct = async (searchText) => {
  try {
    const response = await axios.get(`${api}items?q=${searchText}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${api}items/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
