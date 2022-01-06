import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Title from "../components/Title";
import Container from "@mui/material/Container";
import ApiImgList from "../components/ApiImgList";

const tiers = [
    {
        title: "Market Overview",
        price: "0",
        description: [
            "Top 10 Coin Dominance",
            "BTC - ETH MarketCap",
            "Stable - DEFI Dominance",
        ],
        buttonText: "Get Started",
        buttonVariant: "outlined",
        target: "/btc-dom",
    },
    {
        title: "Coin Events",
        subheader: "Only major",
        price: "0",
        description: [
            "Coin Events in Binance",
            "Coin Events in Gate",
            "Buy-Sell indicators",
        ],
        buttonText: "Get started",
        buttonVariant: "contained",
        target: "/coindar-events",
    },
    {
        title: "Whale Transactions",
        price: "0",
        description: [
            "Whale Movement",
            "Post Transaction Charts",
            "Automated Margin ",
        ],
        buttonText: "Get Started",
        buttonVariant: "outlined",
        target: "/auto-margin",
    },
];

const footers = [
    {
        title: "Company",
        description: ["Team", "History", "Contact us", "Locations"],
    },
    {
        title: "Features",
        description: [
            "Cool stuff",
            "Random feature",
            "Team feature",
            "Developer stuff",
            "Another one",
        ],
    },
    {
        title: "Resources",
        description: [
            "Resource",
            "Resource name",
            "Another resource",
            "Final resource",
        ],
    },
    {
        title: "Legal",
        description: ["Privacy policy", "Terms of use"],
    },
];

const HomePage = () => {
    return (
        <Grid container>
            <GlobalStyles
                styles={{
                    ul: { margin: 0, padding: 0, listStyle: "none" },
                }}
            />
            <CssBaseline />
            <Title h1="Welcome to Cryptogram" />

            <Grid item marginTop={5} xs={12}>
                <GlobalStyles
                    styles={{
                        ul: { margin: 0, padding: 0, listStyle: "none" },
                    }}
                />
                <CssBaseline />

                {/* Hero unit */}
                <Container
                    disableGutters
                    maxWidth="sm"
                    component="main"
                    sx={{ pb: 6 }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Main Features
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography>
                </Container>
                {/* End hero unit */}
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid
                                item
                                key={tier.title}
                                xs={12}
                                sm={tier.title === "Enterprise" ? 12 : 6}
                                md={4}
                            >
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{
                                            align: "center",
                                        }}
                                        subheaderTypographyProps={{
                                            align: "center",
                                        }}
                                        sx={{
                                            pb: 2,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === "dark"
                                                    ? theme.palette.grey[200]
                                                    : theme.palette.grey[700],
                                        }}
                                    />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "baseline",
                                                mb: 2,
                                            }}
                                        >
                                            <Typography
                                                component="h2"
                                                variant="h3"
                                                color="text.primary"
                                            >
                                                ${tier.price}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color="text.secondary"
                                            >
                                                /mo
                                            </Typography>
                                        </Box>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography
                                                    component="li"
                                                    variant="subtitle1"
                                                    align="center"
                                                    key={line}
                                                >
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            variant={tier.buttonVariant}
                                        >
                                            <Link
                                                href={tier.target}
                                                color="text.primary"
                                                sx={{
                                                    textDecoration: "none",
                                                    fontWeight: "bold",
                                                    fontSize: "1rem",
                                                }}
                                            >
                                                {tier.buttonText}
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <ApiImgList />

                {/* Footer */}
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                        borderTop: (theme) =>
                            `1px solid ${theme.palette.divider}`,
                        mt: 8,
                        py: [3, 6],
                    }}
                >
                    <Grid container spacing={4} justifyContent="space-evenly">
                        {footers.map((footer) => (
                            <Grid item xs={6} sm={3} key={footer.title}>
                                <Typography
                                    variant="h6"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    {footer.title}
                                </Typography>
                                <ul>
                                    {footer.description.map((item) => (
                                        <li key={item}>
                                            <Link
                                                href="#"
                                                variant="subtitle1"
                                                color="text.secondary"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    );
};
export default HomePage;
