import React, { useState, useEffect } from "react";
import { getNewsCoinmarketCal } from "../api/Coindar";
import { Grid, Typography } from "@mui/material";
import Title from "../components/Title";
import SmallEventCard from "../components/EventCard";
import { coindarCoinList } from "../api/CoindarCoinList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CoinMarketCalEventsPage = () => {
    const [newsList, setNewsList] = useState([]);
    const [filter, setFilter] = useState("binance");

    const getNewsData = async () => {
        const res = await getNewsCoinmarketCal();
        setNewsList(res.body);
    };
    useEffect(() => {
        getNewsData();
    }, []);

    const handleChange = (event, newAlignment) => {
        setFilter(newAlignment);
    };

    const getCoinDetailedInfo = (symbol) => {
        for (let i = 0; i < coindarCoinList.length; i++) {
            if (coindarCoinList[i].symbol === symbol) {
                return {
                    img: coindarCoinList[i].image_64,
                    gate: coindarCoinList[i].gate,
                    binance: coindarCoinList[i].binance,
                };
            }
        }
        return null;
    };
    return (
        <Grid container marginBottom={10} spacing={5} justifyContent={"center"}>
            <Grid item xs={11}>
                <Title
                    h1="CoinMarketCal Events"
                    h2="Upcoming Crytocurrency Events, mostly 7 days @CoinMarketCal"
                ></Title>
                <Typography variant="body2" gutterBottom marginTop={2}>
                    Active categories are General - Brand - Exchange -Hard fork
                    - ICO - Partnership - Swap - Update - Report - NFT
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={filter}
                    exclusive
                    onChange={handleChange}
                    sx={{ marginTop: 2 }}
                >
                    <ToggleButton value="binance">Binance</ToggleButton>
                    <ToggleButton value="gate">Gate</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            {newsList &&
                newsList.map((coin, id) => {
                    if (getCoinDetailedInfo(coin.coins[0].symbol) !== null) {
                        const { img, gate, binance } = getCoinDetailedInfo(
                            coin.coins[0].symbol
                        );
                        if (
                            (filter === "binance" && binance === true) ||
                            (filter === "gate" && gate === true)
                        ) {
                            return (
                                //symbol - title - date - img - name
                                <SmallEventCard
                                    symbol={coin.coins[0].symbol}
                                    caption={coin.title.en}
                                    date={coin.date_event}
                                    img={img}
                                    name={coin.coins[0].fullname}
                                    gate={gate}
                                    binance={binance}
                                    source={coin.source}
                                    latest={coin.can_occur_before}
                                    proof={coin.proof}
                                    key={id}
                                />
                            );
                        } else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                })}
        </Grid>
    );
};

export default CoinMarketCalEventsPage;
