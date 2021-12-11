import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "@mui/material/Link";
import { List } from "@mui/material";
import Home from "@mui/icons-material/Home";
import Coindar from "../../assets/icon/coindar.png";
import Coingecko from "../../assets/icon/coingecko.png";
import CoinmarketCap from "../../assets/icon/coinmarketcap.png";
import CoinmarketCal from "../../assets/icon/coinmarketcal.png";
import Ethereum from "../../assets/icon/ethereum.png";
import Bitcoin from "../../assets/icon/bitcoin.png";
import FearGreed from "../../assets/icon/fearGreed.png";

export const mainListItems = (
    <List sx={{ marginTop: 5, marginBottom: 20 }}>
        <Link href="/" underline="none" color="text.primary">
            <ListItem>
                <ListItemIcon>
                    <Home
                        sx={{
                            width: "50px",
                            height: "50px",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>

        <Link href="/btc-dom" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={CoinmarketCap}
                    style={{
                        width: "50px",
                        height: "50px",
                    }}
                    alt="FearGreed"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="BTC Dominance"
                />
            </ListItem>
        </Link>

        <Link href="/fear-greed-index" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={FearGreed}
                    style={{
                        width: "50px",
                        height: "40px",
                    }}
                    alt="FearGreed"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="Fear Greed Index"
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
                        width: "50px",
                        height: "50px",
                    }}
                    alt="Coinmarketcal"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="CoinMarketCal"
                />
            </ListItem>
        </Link>

        <Link href="/coindar-events" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Coindar}
                    style={{
                        width: "50px",
                        height: "50px",
                    }}
                    alt="Coindar"
                />
                <ListItemText sx={{ marginLeft: "20px" }} primary="Coindar" />
            </ListItem>
        </Link>

        <Link href="/trending" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Coingecko}
                    style={{
                        width: "40px",
                        height: "40px",
                        marginLeft: "5px",
                    }}
                    alt="Coingecko"
                />
                <ListItemText
                    sx={{ marginLeft: "25px" }}
                    primary="Trending Coins "
                />
            </ListItem>
        </Link>

        <Link href="/btc-treasury" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Bitcoin}
                    style={{
                        width: "50px",
                        height: "50px",
                    }}
                    alt="Bitcoin"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="Bitcoin Treasury"
                />
            </ListItem>
        </Link>

        <Link href="/eth-treasury" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Ethereum}
                    style={{
                        width: "50px",
                        height: "45px",
                    }}
                    alt="Ethereum"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="Ethereum Treasury"
                />
            </ListItem>
        </Link>
    </List>
);

export const secondaryListItems = (
    <List>
        <ListSubheader inset>Upcoming features</ListSubheader>

        <Link href="/pricing" underline="none" color="text.primary">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon
                        sx={{
                            marginRight: "15px !important",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Pricing" />
            </ListItem>
        </Link>
        <Link href="/dashboard" underline="none" color="text.primary">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon
                        sx={{
                            marginRight: "15px !important",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link href="/whale-alert" underline="none" color="text.primary">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon
                        sx={{
                            marginRight: "15px !important",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Whale Alert" />
            </ListItem>
        </Link>
        <Link href="/auto-marjin" underline="none" color="text.primary">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon
                        sx={{
                            marginRight: "15px !important",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Automated Margin" />
            </ListItem>
        </Link>
    </List>
);
