import axios from "axios";
import API_URL from "./ApiUrl";

export async function getBtcTreasury() {
    const response = await axios.get(`${API_URL}/coingecko/company_btc`);
    return response.data;
}

export async function getEthTreasury() {
    const response = await axios.get(`${API_URL}/coingecko/company_eth`);
    return response.data;
}

export async function getTrendingCoins() {
    const response = await axios.get(`${API_URL}/coingecko/trend`);
    return response.data;
}

export async function getNewsCoinmarketCal() {
    const response = await axios.get(`${API_URL}/coinmarketcal/events`);
    return response.data;
}

export async function getNewsCoindar(page, sort) {
    const response = await axios.get(
        `${API_URL}/coindar/events/${page}/${sort}`
    );
    return response.data;
}
