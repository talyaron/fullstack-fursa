// A mock function to mimic making an async request for data
import axios from 'axios';

export function fetchShop() {
  // return new Promise<{ data: ProductsState | undefined }>(async (resolve, rejected) => {
  return new Promise<{ data: any }>(async (resolve, rejected) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/')
      const data = await response.data;
      console.log("response", data)
      resolve({ data: data });
    } catch (e: any) {
      rejected(e.response.data)
    }
  });
}
