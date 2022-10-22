import axios from "axios";

const gifSearch = async (query: string) => {
  const api_key = process.env.GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=20&q=${query}`;
  return axios.get(url).then( res => res.data)
};

export default gifSearch;
