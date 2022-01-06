import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import UnkownWhaleIcon from "../assets/whale/unknown-whale.png";
import Moment from "react-moment";
import BinanceIcon from "../assets/icon/binance-drawer-icon.png";
import NumberFormat from "react-number-format";
import { getPriceChartOfCoin } from "../api/Binance";
import CandleStickChart from "../components/charts/CandleStickChart";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 400,
    lineHeight: "20px",
}));

const TransactionChart = (props) => {
    const { transaction } = props;
    const [priceChart, setPriceChart] = useState([]);
    const [symbol, setSymbol] = useState("");

    useEffect(() => {
        async function getTransactionChart() {
            setSymbol(
                transaction.symbol === "usdt" ||
                    transaction.symbol === "usdc" ||
                    transaction.symbol === "busd"
                    ? transaction.symbol + "try"
                    : transaction.symbol + "usdt"
            );
            let priceData = await getPriceChartOfCoin(symbol);
            setPriceChart(priceData);
        }
        if (transaction) {
            getTransactionChart();
        }
    }, [transaction, symbol]);

    const setFromToIcon = (owner, type) => {
        if (type === "unknown") {
            return (
                <img
                    src={UnkownWhaleIcon}
                    alt="Unknown Whale Icon"
                    style={{
                        width: "100%",
                        height: "40%",
                        maxHeight: "70px",
                        paddingLeft: "20%",
                        paddingRight: "20%",
                        marginTop: "15%",
                    }}
                />
            );
        } else if (type === "exchange" && owner === "binance") {
            return (
                <img
                    src={BinanceIcon}
                    alt="Binance Icon"
                    style={{
                        width: "100%",
                        height: "40%",
                        maxHeight: "60px",
                        paddingLeft: "30%",
                        paddingRight: "30%",
                        marginTop: "15%",
                    }}
                />
            );
        } else {
            return (
                <Grid>
                    <Typography sx={{ marginTop: "10%" }}>
                        {owner.toUpperCase()}
                    </Typography>
                    <Typography>({type})</Typography>
                </Grid>
            );
        }
    };

    return (
        <Grid>
            <Box
                sx={{
                    p: 2,
                    bgcolor: "background.default",
                    width: "100%",
                }}
            >
                <Item elevation={12}>
                    <Grid container marginBottom={2}>
                        <Grid item xs={3} marginTop={2}>
                            <Typography variant="h5">From</Typography>
                            {setFromToIcon(
                                transaction.from.owner,
                                transaction.from.owner_type
                            )}
                        </Grid>
                        <Grid item xs={6} marginTop={1}>
                            <Typography variant="h4">
                                {transaction.symbol.toUpperCase()}
                            </Typography>

                            <Typography variant="h6" marginTop={2}>
                                <NumberFormat
                                    value={transaction.amount_usd}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    decimalScale={0}
                                />
                            </Typography>

                            <Moment format="YYYY/MM/DD HH:mm" unix>
                                {transaction.timestamp}
                            </Moment>
                        </Grid>
                        <Grid item xs={3} marginTop={2}>
                            <Typography variant="h5">To</Typography>
                            {setFromToIcon(
                                transaction.to.owner,
                                transaction.to.owner_type
                            )}
                        </Grid>
                    </Grid>
                    <CandleStickChart
                        data={priceChart}
                        title={symbol.toUpperCase()}
                    />
                </Item>
            </Box>
        </Grid>
    );
};
export default TransactionChart;
