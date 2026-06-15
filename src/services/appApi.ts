import axios from "axios";

const BASE_URL = "https://momentum.redberryinternship.ge/api";
const TOKEN = "a2074438-e043-4c8a-9ee5-dbe94da88f7a";

const headers = { Authorization: `Bearer ${TOKEN}` };

export async function getData(endpoint) {
  const response = await axios.get(BASE_URL + endpoint, {headers});
  return response.data
}
