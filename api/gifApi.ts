import axios from "axios";

const gifSearch = async (query: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7zWpG8lu3iTSGQJSCzetjxW6ANLuTDGg&limit=20&q=${query}`;
  const resp = await fetch(url, { method: "GET" });
    return await resp.json();
};

export default gifSearch;
