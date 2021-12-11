import axios from "axios";
import API_URL from "./apiUrl";

export async function getFearGreed() {
    const response = await axios.get(`${API_URL}/feargreed`);
    return response.data;
}
