import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { getExchangeList } from "../api/CoinmarketCap";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import Title from "../components/Title";

const ExchangeListPage = () => {
    const [exchangeCards, setExchangeCards] = useState([]);
    const fetchExchangeCards = async () => {
        const exchangeCards = await getExchangeList();
        setExchangeCards(exchangeCards);
    };
    useEffect(() => {
        fetchExchangeCards();
    }, []);

    return (
        <Grid item sm={12} justifyContent={"center"} justifySelf={"center"}>
            <Title
                h1="List of Exchanges"
                h2="Exchange infos fetched from CoinmarketCap API"
            />
            <Container sx={{ py: 4 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {exchangeCards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        pt: "7.25%",
                                        height: "200px",
                                    }}
                                    image={card.logo}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {card.name}
                                    </Typography>
                                    <Typography>
                                        {"Volume: "}
                                        <NumberFormat
                                            value={card.description}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                            decimalSeparator="        "
                                            decimalScale={0}
                                        />
                                    </Typography>
                                    <Typography>
                                        {"Date Launched: "}
                                        <Moment format="MM/YYYY">
                                            {card.date}
                                        </Moment>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
};

export default ExchangeListPage;
