import BinanceImg from "../assets/Binance.jpg";
import CoinbaseImg from "../assets/Coinbase.png";
import FtxImg from "../assets/ftx.png";
import BtcTurk from "../assets/btcturk.png";
import Houbi from "../assets/huobi.webp";
import Kucoin from "../assets/kucoin.jpg";
import axios from "axios";
import API_URL from "./apiUrl";

export async function getExchangeList() {
    var binance = await getExchangeInfo(270);
    var coinbase = await getExchangeInfo(89);
    var ftx = await getExchangeInfo(524);
    var huobi = await getExchangeInfo(102);
    var btcTurk = await getExchangeInfo(243);
    var kuCoin = await getExchangeInfo(311);

    return [
        {
            id: 270,
            name: binance.name,
            description: binance.vol,
            date: binance.date,
            logo: BinanceImg,
        },
        {
            id: 89,
            name: coinbase.name,
            description: coinbase.vol,
            logo: CoinbaseImg,
            date: coinbase.date,
        },
        {
            id: 524,
            name: ftx.name,
            description: ftx.vol,
            logo: FtxImg,
            date: ftx.date,
        },
        {
            id: 102,
            name: huobi.name,
            description: huobi.vol,
            logo: Houbi,
            date: huobi.date,
        },
        {
            id: 243,
            name: btcTurk.name,
            description: btcTurk.vol,
            logo: BtcTurk,
            date: btcTurk.date,
        },
        {
            id: 311,
            name: kuCoin.name,
            description: kuCoin.vol,
            logo: Kucoin,
            date: kuCoin.date,
        },
    ];
}

export async function getExchangeInfo(id) {
    const response = await axios.get(`${API_URL}/cmc/exchange/${id}`);
    let data = JSON.parse(response.data);
    return {
        name: data.data[id].name,
        vol: data.data[id].spot_volume_usd,
        logo: data.data[id].logo,
        date: data.data[id].date_launched,
    };
}

export async function getGlobalInfo() {
    const response = await axios.get(`${API_URL}/cmc/global`);
    return response.data;
}
