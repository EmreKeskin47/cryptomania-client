import axios from "axios";
import API_URL from "./apiUrl";

export async function getWhaleTransactions(start = 50, min = 5000000) {
    const response = await axios.get(`${API_URL}/whalealert/${min}/${start}`);
    console.log(response);
    return response.data;
}

export async function getRecentWhaleTransactions() {
    const response = await axios.get(`${API_URL}/whalealert/recent`);
    return response.data;
}
