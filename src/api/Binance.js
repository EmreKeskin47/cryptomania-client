import axios from "axios";
import API_URL from "./ApiUrl";

export async function getPriceOfCoin(ticker) {
    const response = await axios.get(`${API_URL}/binance/price/${ticker}`);
    return response.data;
}

export async function getPriceChartOfCoin(ticker) {
    const response = await axios.get(
        `${API_URL}/binance/price-chart/${ticker}`
    );
    return response.data;
}
