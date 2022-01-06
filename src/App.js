import Dashboard from "./template/dashboard/Dashboard";
import Pricing from "./template/pricing/Pricing";
import ExchangeList from "./pages/ExchangeListPage";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import CustomAppBar from "./layout/AppBar/AppBar";
import { Route, Switch } from "react-router-dom";
import { Box } from "@mui/system";
import BtcTreasury from "./pages/BtcTreasury";
import EthTreasury from "./pages/EthTreasury";
import BtcDominance from "./pages/BtcDominance";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
import FearGreed from "./pages/FearGreed";
import "./App.css";
import Trending from "./pages/Trending";
import CoinMarketCalEventsPage from "./pages/CoinMarketCalEvents";
import CoindarEvents from "./pages/CoindarEvents";
import HomePage from "./pages/Home";
import WhaleAlertPage from "./pages/WhaleAlert";
import AutoMarginPage from "./pages/AutoMargin";

function App() {
    return (
        <ThemeConfig>
            <GlobalStyles />
            <BaseOptionChartStyle />
            <div className="App">
                <Box sx={{ display: "flex" }}>
                    <CustomAppBar />
                    <Box
                        component="main"
                        sx={{
                            ml: { sm: `${240}px` },
                            width: "100%",
                            marginTop: 10,
                        }}
                    >
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route
                                exact
                                path="/exchanges"
                                component={ExchangeList}
                            />
                            <Route
                                path="/btc-treasury"
                                component={BtcTreasury}
                            />
                            <Route
                                path="/fear-greed-index"
                                component={FearGreed}
                            />
                            <Route
                                path="/eth-treasury"
                                component={EthTreasury}
                            />
                            <Route path="/btc-dom" component={BtcDominance} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/trending" component={Trending} />
                            <Route path="/pricing" component={Pricing} />
                            <Route
                                path="/whale-alert"
                                component={WhaleAlertPage}
                            />
                            <Route
                                path="/coinmarketcal-events"
                                component={CoinMarketCalEventsPage}
                            />
                            <Route
                                path="/coindar-events"
                                component={CoindarEvents}
                            />
                            <Route
                                path="/auto-margin"
                                component={AutoMarginPage}
                            />
                        </Switch>
                    </Box>
                </Box>
            </div>
        </ThemeConfig>
    );
}

export default App;
