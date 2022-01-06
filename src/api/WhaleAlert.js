import axios from "axios";
import API_URL from "./ApiUrl";

export async function getWhaleTransactions() {
    const response = await axios.get(`${API_URL}/whalealert`);
    return response.data;
}

export async function getRecentWhaleTransactions() {
    const response = await axios.get(`${API_URL}/whalealert/recent`);
    return response.data;
}
