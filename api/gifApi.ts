import axios from "axios";

const gifSearch = async (query: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7zWpG8lu3iTSGQJSCzetjxW6ANLuTDGg&limit=20&q=${query}`;
  return axios.get(url).then( res => res.data)
};

export default gifSearch;
