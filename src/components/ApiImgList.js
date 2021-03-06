import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";

import CMC from "../assets/homepage/coinarketcap-large.png";
import CoinGecko from "../assets/homepage/coingecko-large.png";
import CMCal from "../assets/homepage/coinmarketcal-large.png";
import FearGreed from "../assets/homepage/feargreed-large.jpg";
import FinnHub from "../assets/homepage/finnhub-large.png";
import Whale from "../assets/homepage/whalealert-large.jpg";
import Binance from "../assets/homepage/binance-large.jpg";
import Coindar from "../assets/homepage/coindar-large.jpg";
import TradingView from "../assets/homepage/tradingview-large.png";

const ImageBackdrop = styled("div")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "#000",
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("md")]: {
        width: "100% !important",
        height: 100,
    },
    "&:hover": {
        zIndex: 1,
    },
    "&:hover .imageBackdrop": {
        opacity: 0.15,
    },
    "&:hover .imageMarked": {
        opacity: 0,
    },
    "&:hover .imageTitle": {
        border: "4px solid currentColor",
    },
    "& .imageTitle": {
        position: "relative",
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    "& .imageMarked": {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity"),
    },
}));

const images = [
    {
        url: CMC,
        title: "CoinmarketCap API",
        width: "40%",
    },
    {
        url: CoinGecko,
        title: "CoinGecko API",
        width: "20%",
    },
    {
        url: FinnHub,
        title: "FinnHub API",
        width: "40%",
    },

    {
        url: FearGreed,
        title: "FearGreed API",
        width: "38%",
    },
    {
        url: CMCal,
        title: "CoinMarketCal API",

        width: "38%",
    },
    {
        url: Whale,
        title: "WhaleAlert API",
        width: "24%",
    },
    {
        url: Coindar,
        title: "Coindar API",
        width: "40%",
    },
    {
        url: Binance,
        title: "Binance API",
        width: "20%",
    },
    {
        url: TradingView,
        title: "TradingView API",
        width: "40%",
    },
];

const ApiImgList = () => {
    return (
        <Container component="section" sx={{ mt: 16, mb: 8 }}>
            <Typography
                variant="h6"
                marked="center"
                align="center"
                component="h4"
            >
                Cryptogram combines data from the following sources
            </Typography>
            <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap" }}>
                {images.map((image) => (
                    <ImageIconButton
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: "cover",
                                backgroundPosition: "center 40%",
                                backgroundImage: "url(" + image.url + ")",
                            }}
                        />
                        <ImageBackdrop className="imageBackdrop" />
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "common.white",
                            }}
                        >
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageTitle"
                            >
                                {image.title}
                                <div className="imageMarked" />
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>
        </Container>
    );
};
export default ApiImgList;
