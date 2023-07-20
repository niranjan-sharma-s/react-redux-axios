import { url } from "./url";
import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(url)
     const data = await response.data
     return data
  } catch (error) {
    console.log(error);
  }
};
