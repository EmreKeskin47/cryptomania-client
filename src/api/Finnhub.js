import axios from "axios";
import API_URL from "./ApiUrl";

export async function getRSIBinance(symbol) {
    const response = await axios.get(`${API_URL}/finnhub/${symbol}`);
    return response.data;
}
