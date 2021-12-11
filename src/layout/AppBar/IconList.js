import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";
import Home from "@mui/icons-material/Home";
import Coindar from "../../assets/icon/coindar.png";
import Coingecko from "../../assets/icon/coingecko.png";
import CoinmarketCap from "../../assets/icon/coinmarketcap.png";
import CoinmarketCal from "../../assets/icon/coinmarketcal.png";
import Ethereum from "../../assets/icon/ethereum.png";
import Bitcoin from "../../assets/icon/bitcoin.png";
import FearGreed from "../../assets/icon/fearGreed.png";
import { Card } from "@mui/material";

export const mainIconList = (
    <Card>
        <Link href="/" underline="none" color="text.primary">
            <ListItem>
                <ListItemIcon>
                    <Home
                        sx={{
                            width: "20px",
                            height: "20px",
                        }}
                    />
                </ListItemIcon>
            </ListItem>
        </Link>

        <Link href="/btc-dom" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={CoinmarketCap}
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                    alt="FearGreed"
                />
            </ListItem>
        </Link>

        <Link href="/fear-greed-index" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={FearGreed}
                    style={{
                        width: "70px",
                        height: "20px",
                    }}
                    alt="FearGreed"
                />
            </ListItem>
        </Link>

        <Link
            href="/coinmarketcal-events"
            underline="none"
            color="text.primary"
        >
            <ListItem>
                <img
                    src={CoinmarketCal}
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                    alt="Coinmarketcal"
                />
            </ListItem>
        </Link>

        <Link href="/coindar-events" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Coindar}
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                    alt="Coindar"
                />
            </ListItem>
        </Link>

        <Link href="/trending" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Coingecko}
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                    alt="Coingecko"
                />
            </ListItem>
        </Link>

        <Link href="/btc-treasury" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Bitcoin}
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                    alt="Bitcoin"
                />
            </ListItem>
        </Link>

        <Link href="/eth-treasury" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Ethereum}
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                    alt="Ethereum"
                />
            </ListItem>
        </Link>
    </Card>
);
