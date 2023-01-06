import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Binance from "../assets/icon/binance-icon.png";
import Gate from "../assets/icon/gate-icon.png";
import Modal from "@mui/material/Modal";
import Moment from "react-moment";
import PercentChange from "./PercentChange";
import Link from "@mui/material/Link";
import { getRSIBinance } from "../api/Finnhub";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    minHeight: "500px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const SmallEventCard = (props) => {
    var {
        symbol,
        latest,
        name,
        img,
        date,
        caption,
        gate,
        binance,
        source,
        proof,
        text,
        dateAdded,
        priceChange,
        coindar,
    } = props;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rsi, setRsi] = useState([]);

    function isValidDate(d) {
        return d instanceof Date && !isNaN(d);
    }

    const checkAndFormatInvalidDate = () => {
        if (date && !isValidDate(date)) {
            let dateString = date.toString();
            let year = dateString.substring(0, 4);
            let month = "0" + dateString.substring(5, 7);
            let day = dateString.substring(7, 9);
            let tempDate = year + "-" + month + day;
            let dateTest = new Date(tempDate);

            if (isValidDate(dateTest)) {
                date = tempDate;
            }
        }

        if (dateAdded && !isValidDate(dateAdded)) {
            let dateAddedString = dateAdded.toString();
            let year = dateAddedString.substring(0, 4);
            let month = dateAddedString.substring(5, 7);
            if (month.includes("-")) {
                month = "0" + month;
            }
            let day = dateAddedString.substring(7, 9);
            if (day.includes("-")) {
                day = "0" + day;
            }
            let tempDate = year + "-" + month + day;
            let dateTest = new Date(tempDate);
            if (isValidDate(dateTest)) {
                dateAdded = tempDate;
            }
        }
    };

    useEffect(() => {
        async function getIndicatorData() {
            const res = await getRSIBinance(symbol);
            if (res.s === "ok") {
                setRsi(res.rsi);
            }
        }
        getIndicatorData();
    }, [symbol]);

    if (coindar && date.includes("Q") === false) {
        checkAndFormatInvalidDate();
    }

    return (
        <Grid item xs={10} md={5.5} lg={3.5} xl={2.5} justifySelf={"center"}>
            <Card sx={{ maxWidth: 400, height: "100%" }}>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{
                                width: 60,
                                height: 60,
                            }}
                            aria-label="recipe"
                            src={img}
                        ></Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={handleOpen}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={symbol}
                    subheader={name}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {proof ? (
                            <img
                                style={{ maxHeight: "100%", width: "100%" }}
                                src={proof}
                                alt="proof img not available"
                            />
                        ) : (
                            <Box>
                                {source && (
                                    <Link
                                        href={source}
                                        color="text.primary"
                                        sx={{
                                            textDecoration: "none",
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        View Event Source
                                    </Link>
                                )}
                                {rsi && rsi.length > 0 ? (
                                    <Grid item>
                                        <Typography variant="h3">
                                            {symbol}
                                        </Typography>
                                        <Typography variant="body1">
                                            Daily RSI for last 14 days
                                        </Typography>
                                        <Grid item xs={12}>
                                            <ul>
                                                {rsi.map((item, id) => (
                                                    <Typography
                                                        key={id}
                                                        variant="subtitle1"
                                                        color="text.secondary"
                                                    >
                                                        {item}
                                                    </Typography>
                                                ))}
                                            </ul>
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                    >
                                        {"RSI not available for " + symbol}
                                    </Typography>
                                )}
                            </Box>
                        )}
                    </Box>
                </Modal>

                <CardContent>
                    {date ? (
                        <div>
                            {coindar && date.includes("Q") ? (
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                    >
                                        {date}
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                    >
                                        {caption}
                                    </Typography>
                                </div>
                            ) : (
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                    >
                                        <Moment format="D MMMM" withTitle>
                                            {date}
                                        </Moment>
                                        {latest && " (or earlier)"}
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                    >
                                        {caption}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Typography variant="h6" color="text.primary">
                            {text}
                        </Typography>
                    )}
                    {dateAdded && priceChange ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "45%",
                                    marginTop: 2,
                                    justifyContent: "space-between",
                                }}
                            >
                                {gate && (
                                    <img
                                        src={Gate}
                                        alt="gate"
                                        style={{
                                            width: "45px",
                                            height: "45px",
                                        }}
                                    />
                                )}
                                {binance && (
                                    <img
                                        src={Binance}
                                        alt="binance"
                                        style={{
                                            width: "45px",
                                            height: "45px",
                                        }}
                                    />
                                )}
                            </Box>
                            <Box>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {"added on "}
                                </Typography>

                                <Moment format="D MMM" withTitle>
                                    {dateAdded}
                                </Moment>
                                <PercentChange change={priceChange} />
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                height: "30px !important",
                                marginTop: "10px",
                                width: "100%",
                                justifyContent: "space-evenly",
                            }}
                        >
                            {gate && <img src={Gate} alt="gate" />}
                            {binance && <img src={Binance} alt="binance" />}
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SmallEventCard;
