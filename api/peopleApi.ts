import axios from "axios";
import { Paliza } from "../components/interfaces";

export const peopleApi = (endpoint: string) => {
  const SERVER_URL = process.env.VERCEL_URL as string;
  return fetch(`${SERVER_URL}/api${endpoint}`).then((res: any) => res.json());
};

export const savePaliza = async (data: Paliza) => {
  const SERVER_URL = process.env.VERCEL_URL as string;
  return await axios.post(`${SERVER_URL}/api/paliza`, data).then((res: any) => res.data);
};
