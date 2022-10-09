import axios from "axios";

const peopleApi = axios.create({
    baseURL: 'https://raw.githubusercontent.com/joshua1983/palizasporencargo/main/public'
})

peopleApi.get('/data.json')

export default peopleApi;