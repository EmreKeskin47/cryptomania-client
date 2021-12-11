import React, { useState, useEffect } from "react";
import { getNewsCoindar } from "../api/Coindar";
import { Grid } from "@mui/material";
import Title from "../components/Title";
import { coindarCoinList } from "../api/CoindarCoinList";
import SmallEventCard from "../components/EventCard";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const CoindarEvents = () => {
    // const [page, setPage] = useState(1);
    // const [sort, setSort] = useState("date_start");
    const [newsList, setNewsList] = useState([]);
    const [filter, setFilter] = useState("binance");

    const getNewsData = async (page, sort) => {
        const res = await getNewsCoindar(page, sort);
        setNewsList(res);
    };
    useEffect(() => {
        getNewsData(1, "date_start");
    }, []);

    const handleChange = (event, newAlignment) => {
        setFilter(newAlignment);
    };

    const getCoinDetailedInfo = (id) => {
        for (let i = 0; i < coindarCoinList.length; i++) {
            if (coindarCoinList[i].id === id) {
                return {
                    name: coindarCoinList[i].name,
                    symbol: coindarCoinList[i].symbol,
                    img: coindarCoinList[i].image_64,
                    gate: coindarCoinList[i].gate,
                    binance: coindarCoinList[i].binance,
                };
            }
        }
        return null;
    };

    return (
        <Grid
            container
            marginBottom={10}
            spacing={5}
            justifyContent={"center"}
            justifySelf={"center"}
            justifyItems={"center"}
        >
            <Grid item sm={12}>
                <Title
                    h1="Coindar News"
                    h2="Upcoming Crytocurrency Events fetched from Coindar API"
                ></Title>
                <ToggleButtonGroup
                    color="primary"
                    value={filter}
                    exclusive
                    onChange={handleChange}
                    sx={{ marginTop: 2 }}
                >
                    <ToggleButton value="binance">Binance</ToggleButton>
                    <ToggleButton value=" ">Both</ToggleButton>
                    <ToggleButton value="gate">Gate</ToggleButton>
                </ToggleButtonGroup>
            </Grid>

            {newsList &&
                coindarCoinList &&
                newsList.map((coin, id) => {
                    if (getCoinDetailedInfo(coin.coin_id) !== null) {
                        const { name, symbol, img, gate, binance } =
                            getCoinDetailedInfo(coin.coin_id);
                        if (
                            (filter === "binance" && binance === true) ||
                            filter === " " ||
                            (filter === "gate" && gate === true)
                        ) {
                            return (
                                <SmallEventCard
                                    symbol={symbol}
                                    name={name}
                                    img={img}
                                    date={
                                        coin.date_start.length > 7
                                            ? coin.date_start
                                            : coin.date_start + "-30"
                                    }
                                    caption={coin.caption}
                                    gate={gate}
                                    binance={binance}
                                    key={id}
                                    latest={coin.date_start.length < 8}
                                    source={coin.source}
                                    proof={coin.source}
                                    dateAdded={coin.date_public}
                                    priceChange={coin.coin_price_changes}
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

export default CoindarEvents;
