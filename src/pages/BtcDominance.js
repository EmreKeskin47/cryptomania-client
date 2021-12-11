import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { useTheme, styled } from "@mui/material/styles";
import { Card, CardHeader, Grid, Paper, Typography } from "@mui/material";
// utils
import { fNumber } from "../utils/formatNumber";
//
import { BaseOptionChart } from "../components/charts";
import { useEffect, useState } from "react";
import { getBtcDominance } from "../api/Coingecko";
import { getGlobalInfo } from "../api/CoinmarketCap";
import Title from "../components/Title";
import Chart from "react-apexcharts";
import NumberFormat from "react-number-format";
import PercentChange from "../components/PercentChange";
import { Box } from "@mui/system";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 300;
const LEGEND_HEIGHT = 47;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
    height: CHART_HEIGHT,
    marginTop: theme.spacing(2),
    "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
    "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
        overflow: "visible",
    },
    "& .apexcharts-legend": {
        height: LEGEND_HEIGHT,
        alignContent: "center",
        position: "relative !important",
        borderTop: `solid 1px ${theme.palette.divider}`,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
    },
}));

export default function AppCurrentVisits() {
    const [domValuePie, setDomValuePie] = useState([]);
    const [domValueBar, setDomValueBar] = useState([]);
    const [domLabel, setDomLabel] = useState([]);
    const [domTop10, setDomTop10] = useState([]);
    const [marketCap, setMarketCap] = useState(0);
    const [ethCap, setEthCap] = useState(0);
    const [btcCap, setBtcCap] = useState(0);
    const [marketChange, setMarketChange] = useState(0);
    const [ethChange, setEthChange] = useState(0);
    const [btcChange, setBtcChange] = useState(0);

    const theme = useTheme();

    const getDomData = async () => {
        const res = await getGlobalInfo();
        let ethCap =
            (res.data.quote.USD.total_market_cap * res.data.eth_dominance) /
            100;
        let btcCap =
            (res.data.quote.USD.total_market_cap * res.data.btc_dominance) /
            100;
        setMarketCap(res.data.quote.USD.total_market_cap);
        setEthCap(ethCap);
        setBtcCap(btcCap);
        setMarketChange(
            res.data.quote.USD.total_market_cap_yesterday_percentage_change
        );
        let pieValues = [
            btcCap,
            ethCap,
            res.data.stablecoin_market_cap,
            res.data.defi_market_cap,
        ];
        let pieLabels = ["BTC", "ETH", "STABLE", "DEFI"];
        setBtcChange(res.data.btc_dominance_24h_percentage_change);
        setEthChange(res.data.eth_dominance_24h_percentage_change);
        const data = await getBtcDominance();
        let dom = Object.values(data.data.market_cap_percentage);
        let top10 = Object.keys(data.data.market_cap_percentage);
        setDomTop10(top10);
        setDomLabel(pieLabels);
        setDomValuePie(pieValues);

        for (let i = 0; i < dom.length; i++) {
            dom[i] = dom[i].toPrecision(3);
        }
        setDomValueBar(dom);
    };
    useEffect(() => {
        getDomData();
    }, []);

    const CHART_DATA_3 = {
        options: {
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: "top", // top, center, bottom
                    },
                },
            },
            toolbar: {
                tools: {
                    colors: ["#000"],
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -10,
                style: {
                    fontSize: "0.6rem",
                    colors: ["#fff"],
                },
            },
            xaxis: {
                categories: domTop10,
                labels: {
                    style: {
                        colors: [
                            "#fff",
                            "#fff",
                            "#fff",
                            "#fff",
                            "#fff",
                            "#fff",
                            "#fff",
                            "#fff",
                            "#fff",
                            "#fff",
                        ],
                        fontSize: "12px",
                        fontWeight: 400,
                    },
                },

                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#fff",
                            colorTo: "#fff",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        },
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: ["#fff", "#fff", "#fff"],
                        fontSize: "12px",
                        fontWeight: 400,
                    },
                },
            },
        },
        series: [
            {
                name: "market dominance",
                data: domValueBar,
            },
        ],
    };

    const chartOptions = merge(BaseOptionChart(), {
        colors: [
            theme.palette.primary.main,
            theme.palette.warning.main,
            theme.palette.success.dark,
            theme.palette.error.main,
        ],
        labels: domLabel,
        stroke: { colors: [theme.palette.background.paper] },
        legend: { floating: true, horizontalAlign: "center" },
        dataLabels: { enabled: true, dropShadow: { enabled: false } },
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (seriesName) => fNumber(seriesName),
                title: {
                    formatter: (seriesName) => `#${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: { donut: { labels: { show: false } } },
        },
    });

    return (
        <Grid container justifyContent={"center"}>
            <Title h1="Market Data" />
            <Grid container justifyContent={"center"} marginY={5}>
                <Grid item xs={10} lg={3} margin={3} j>
                    <Card>
                        <Paper
                            sx={{
                                marginTop: 3,
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: 150,
                            }}
                        >
                            <Typography
                                component="h2"
                                variant="h6"
                                color="primary"
                                gutterBottom
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {"Total Market Cap"}
                                    <PercentChange
                                        change={marketChange}
                                        decimalTrim={true}
                                    />
                                </Box>
                            </Typography>

                            <Typography component="p" variant="h5">
                                <NumberFormat
                                    value={marketCap}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    decimalScale={0}
                                />
                            </Typography>
                        </Paper>
                    </Card>
                </Grid>

                <Grid item xs={10} lg={3} margin={3}>
                    <Card>
                        <Paper
                            sx={{
                                marginTop: 3,
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: 150,
                            }}
                        >
                            <Typography
                                component="h2"
                                variant="h6"
                                color="primary"
                                gutterBottom
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {"Ethereum Market Cap     "}
                                    <PercentChange
                                        change={ethChange}
                                        decimalTrim={true}
                                    />
                                </Box>
                            </Typography>

                            <Typography component="p" variant="h5">
                                <NumberFormat
                                    value={ethCap}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    decimalScale={0}
                                />
                            </Typography>
                        </Paper>
                    </Card>
                </Grid>

                <Grid item xs={10} lg={3} margin={3}>
                    <Card>
                        <Paper
                            sx={{
                                marginTop: 3,
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: 150,
                            }}
                        >
                            <Typography
                                component="h2"
                                variant="h6"
                                color="primary"
                                gutterBottom
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {"Bitcoin Market Cap  "}
                                    <PercentChange
                                        change={btcChange}
                                        decimalTrim={true}
                                    />
                                </Box>
                            </Typography>

                            <Typography component="p" variant="h5">
                                <NumberFormat
                                    value={btcCap}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    decimalScale={0}
                                />
                            </Typography>
                        </Paper>
                    </Card>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={"center"}
                spacing={5}
                marginBottom={10}
            >
                <Grid item xs={11} lg={7}>
                    <Card>
                        <CardHeader
                            title="Top 10 Coin Dominance"
                            subheader="updated today, data from Coingecko"
                        />
                        <Chart
                            options={CHART_DATA_3.options}
                            series={CHART_DATA_3.series}
                            type="bar"
                            height={300}
                        />
                    </Card>
                </Grid>
                <Grid item xs={10} lg={3}>
                    <Card>
                        <CardHeader
                            title="Stable - DEFI Dominance"
                            subheader="updated today, @Coinmarketcap"
                        />
                        <ChartWrapperStyle dir="ltr">
                            <ReactApexChart
                                type="pie"
                                series={domValuePie}
                                options={chartOptions}
                                height={270}
                            />
                        </ChartWrapperStyle>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}
