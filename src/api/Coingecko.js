import axios from "axios";
import API_URL from "./apiUrl";

export async function getBtcDominance() {
    const response = await axios.get(`${API_URL}/coingecko/dominance`);
    return response.data;
}
