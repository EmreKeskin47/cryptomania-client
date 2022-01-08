import React, { useState, useEffect } from "react";
import { getTrendingCoins } from "../api/Coindar";
import { Grid } from "@mui/material";
import Title from "../components/Title";
import { coindarCoinList } from "../api/CoindarCoinList";
import SmallEventCard from "../components/EventCard";

const TrendingPage = () => {
    const [trending, setTrending] = useState([]);

    const getTrendingList = async () => {
        const res = await getTrendingCoins();
        setTrending(res.coins);
    };
    useEffect(() => {
        getTrendingList();
    }, []);

    const getCoinDetailedInfo = (symbol) => {
        for (let i = 0; i < coindarCoinList.length; i++) {
            if (coindarCoinList[i].symbol === symbol) {
                return {
                    gate: coindarCoinList[i].gate,
                    binance: coindarCoinList[i].binance,
                };
            }
        }
        return { gate: false, binance: false };
    };
    //Symbol - Name - date(MarketCap) - Title(Price) - gate - binance

    return (
        <Grid container spacing={3} marginBottom={10} justifyContent={"center"}>
            <Grid item xs={12}>
                <Title
                    h1="Trending Coins"
                    h2="Top-7 trending coins on CoinGecko as searched by users in the last 24 hours @CoinGecko"
                ></Title>
            </Grid>
            {trending &&
                coindarCoinList &&
                trending.map((coin, id) => {
                    const { gate, binance } = getCoinDetailedInfo(
                        coin.item.symbol
                    );
                    return (
                        <SmallEventCard
                            key={id}
                            symbol={coin.item.symbol}
                            name={coin.item.name}
                            img={coin.item.large}
                            text={
                                "Market Cap Ranking: " +
                                coin.item.market_cap_rank
                            }
                            gate={gate}
                            binance={binance}
                        />
                    );
                })}
        </Grid>
    );
};

export default TrendingPage;
