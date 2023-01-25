import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getWhaleTransactions } from "../api/WhaleAlert";
import Title from "../components/Title";
import LoadingIndicator from "../components/Loading";
import TransactionChart from "../components/TransactionChart";

const AutoMarginPage = () => {
    const [newTransactions, setNewTransactions] = useState([]);
    const [newCount, setNewCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const getTransactions = async () => {
        try {
            const recentRes = await getWhaleTransactions();
            //console.log(recentRes);
            let binanceArray = [];
            for (let i = 0; i < recentRes.transactions.length; i++) {
                if (
                    recentRes.transactions[i].from.owner === "Binance" ||
                    recentRes.transactions[i].to.owner === "Binance"
                ) {
                    binanceArray.push(recentRes.transactions[i]);
                }
            }
            console.log(binanceArray);
            setNewTransactions(binanceArray);
            setNewCount(binanceArray.length);
        } catch (e) {
            console.log("get whale transaction e ", e);
        }
    };

    useEffect(() => {
        getTransactions();
        setLoading(false);
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    } else {
        return (
            <Grid container justifyContent={"center"} marginBottom={20}>
                <Title
                    h1="Automated Margin Test v1"
                    h2="@WhaleAlert @BinanceAPI"
                />

                <Grid item xs={12}>
                    <Typography variant="h6" marginY={5}>
                        Whale Transactions Occured in Last 10 minutes involving
                        Binance, with real time price chart (
                        {newCount ? newCount : "no transaction found"})
                    </Typography>
                </Grid>

                {newTransactions &&
                    newTransactions.map((transaction, id) => {
                        return (
                            <Grid item xs={12} lg={6} key={id}>
                                <TransactionChart transaction={transaction} />
                            </Grid>
                        );
                    })}
            </Grid>
        );
    }
};

export default AutoMarginPage;
