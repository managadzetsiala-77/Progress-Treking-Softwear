import axios from "axios";
import { BASE_URL, TOKEN } from "../config/ApiConfig";

const headers = { Authorization: `Bearer ${TOKEN}` };

export async function getData(endpoint: string) {
  const response = await axios.get(BASE_URL + endpoint, { headers });
  return response.data;
}
