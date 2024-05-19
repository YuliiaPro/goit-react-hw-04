import axios from "axios";

const API_KEY = "Client-ID iiBVbQ0ryFEOEK1NyQRBaWMV66_Gya2hKzxEXjD8Gbg";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = API_KEY;

export const getImages = async (topic, currentPage) => {
  const response = await axios.get(`search/photos`, {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });
  return response.data.results;
};
