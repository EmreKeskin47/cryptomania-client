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
import Binance from "../../assets/icon/binance-drawer-icon.png";
import WhaleAlert from "../../assets/icon/whale-alert-icon.png";
import Cryptogram from "../../assets/small-icon.png";

export const mainListItems = (
    <List sx={{ marginBottom: 8 }}>
        <Link href="/" underline="none" color="text.primary">
            <ListItem>
                <ListItemIcon>
                    <Home
                        sx={{
                            width: "35px",
                            height: "40px",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link href="/exchanges" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Binance}
                    style={{
                        width: "35px",
                        height: "35px",
                    }}
                    alt="FearGreed"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="Exchange List "
                />
            </ListItem>
        </Link>

        <Link href="/btc-dom" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={CoinmarketCap}
                    style={{
                        width: "35px",
                        height: "35px",
                    }}
                    alt="FearGreed"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="Market Overview"
                />
            </ListItem>
        </Link>

        <Link href="/fear-greed-index" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={FearGreed}
                    style={{
                        width: "35px",
                        height: "30px",
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
                        width: "35px",
                        height: "35px",
                    }}
                    alt="Coinmarketcal"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="CoinMarketCal Events"
                />
            </ListItem>
        </Link>

        <Link href="/coindar-events" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Coindar}
                    style={{
                        width: "35px",
                        height: "35px",
                    }}
                    alt="Coindar "
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="Coindar  Events"
                />
            </ListItem>
        </Link>

        <Link href="/trending" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Coingecko}
                    style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "5px",
                    }}
                    alt="Coingecko"
                />
                <ListItemText
                    sx={{ marginLeft: "20px" }}
                    primary="Trending Coins "
                />
            </ListItem>
        </Link>

        <Link href="/btc-treasury" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Bitcoin}
                    style={{
                        width: "40px",
                        height: "40px",
                    }}
                    alt="Bitcoin"
                />
                <ListItemText
                    sx={{ marginLeft: "15px" }}
                    primary="Bitcoin Treasury"
                />
            </ListItem>
        </Link>

        <Link href="/eth-treasury" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Ethereum}
                    style={{
                        width: "40px",
                        height: "35px",
                    }}
                    alt="Ethereum"
                />
                <ListItemText
                    sx={{ marginLeft: "15px" }}
                    primary="Ethereum Treasury"
                />
            </ListItem>
        </Link>
        <Link href="/whale-alert" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={WhaleAlert}
                    style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "7px",
                    }}
                    alt="Ethereum"
                />
                <ListItemText
                    sx={{ marginLeft: "18px" }}
                    primary="Whale Alert"
                />
            </ListItem>
        </Link>
        <Link href="/auto-margin" underline="none" color="text.primary">
            <ListItem>
                <img
                    src={Cryptogram}
                    style={{
                        width: "64px",
                        height: "55px",
                        marginLeft: "-10px",
                        marginTop: "-10px",
                    }}
                    alt="Cryptogram"
                />
                <ListItemText
                    sx={{ marginTop: "-10px" }}
                    primary="Automated Margin"
                />
            </ListItem>
        </Link>
    </List>
);

export const secondaryListItems = (
    <List>
        <ListSubheader inset>Upcoming features</ListSubheader>
        <Link underline="none" color="text.primary">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon
                        sx={{
                            marginRight: "15px !important",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Detailed Indicator Signals" />
            </ListItem>
        </Link>

        <Link underline="none" color="text.primary">
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon
                        sx={{
                            marginRight: "15px !important",
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary="Whale Movement Analysis" />
            </ListItem>
        </Link>

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
    </List>
);
