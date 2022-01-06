import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getWhaleTransactions } from "../api/WhaleAlert";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import UnkownWhaleIcon from "../assets/whale/unknown-whale.png";
import Moment from "react-moment";
import BinanceIcon from "../assets/icon/binance-drawer-icon.png";
import NumberFormat from "react-number-format";
import Title from "../components/Title";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 140,
    lineHeight: "30px",
}));

const WhaleAlertPage = () => {
    const [oldTransactions, setOldTransactions] = useState([]);
    const [oldCount, setOldCount] = useState(0);
    const getTransactions = async () => {
        const res = await getWhaleTransactions();
        setOldCount(res.count);
        setOldTransactions(res.transactions);
    };

    useEffect(() => {
        getTransactions();
    }, []);

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
        <Grid container justifyContent={"center"} marginBottom={20}>
            <Title h1="List of Whale Transactions" h2="@WhaleAlert" />

            <Grid item xs={12}>
                <Typography variant="h6" marginY={5}>
                    Whale Transactions in last 1 hour over 50 Million (
                    {oldCount})
                </Typography>
            </Grid>

            {oldTransactions &&
                oldTransactions.map((transaction, id) => {
                    return (
                        <Grid item xs={12} md={5.5} lg={3.8}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: "background.default",
                                    width: "100%",
                                }}
                                key={id}
                            >
                                <Item elevation={12}>
                                    <Grid container>
                                        <Grid item xs={3} marginTop={2}>
                                            <Typography variant="h5">
                                                From
                                            </Typography>
                                            {setFromToIcon(
                                                transaction.from.owner,
                                                transaction.from.owner_type
                                            )}
                                        </Grid>
                                        <Grid item xs={6} marginTop={1}>
                                            <Typography variant="h4">
                                                {transaction.symbol.toUpperCase()}
                                            </Typography>

                                            <Typography
                                                variant="h6"
                                                marginTop={2}
                                            >
                                                <NumberFormat
                                                    value={
                                                        transaction.amount_usd
                                                    }
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"$"}
                                                    decimalScale={0}
                                                />
                                            </Typography>

                                            <Moment
                                                format="YYYY/MM/DD HH:mm"
                                                unix
                                            >
                                                {transaction.timestamp}
                                            </Moment>
                                        </Grid>
                                        <Grid item xs={3} marginTop={2}>
                                            <Typography variant="h5">
                                                To
                                            </Typography>
                                            {setFromToIcon(
                                                transaction.to.owner,
                                                transaction.to.owner_type
                                            )}
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Box>
                        </Grid>
                    );
                })}
        </Grid>
    );
};

export default WhaleAlertPage;
