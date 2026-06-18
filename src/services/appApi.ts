import axios from "axios";
import { BASE_URL, TOKEN } from "../config/ApiConfig";

const headers = { Authorization: `Bearer ${TOKEN}` };

export async function getData(endpoint: string) {
  const response = await axios.get(BASE_URL + endpoint, { headers });
  return response.data;
}

export async function createData<T>(endpoint: string, data: T) {
  const response = await axios.post(BASE_URL + endpoint, data, { headers });
  return response.data;
}
