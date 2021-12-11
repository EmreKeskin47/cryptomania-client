import React from "react";
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

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const SmallEventCard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {
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
    } = props;

    return (
        <Grid item xs={11} md={5.5} lg={3.5} xl={2.5} justifySelf={"center"}>
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
                        <img
                            src={proof}
                            alt={
                                "proof img not available, event from: " + source
                            }
                        />
                    </Box>
                </Modal>

                <CardContent>
                    {date ? (
                        <div>
                            <Typography variant="h6" color="text.primary">
                                <Moment format="D MMMM" withTitle>
                                    {date}
                                </Moment>
                                {latest && " (or earlier)"}
                            </Typography>

                            <Typography variant="h6" color="text.primary">
                                {caption}
                            </Typography>
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
