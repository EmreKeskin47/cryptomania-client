import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFearGreed } from "../api/Feargreed";
import Title from "../components/Title";
import ReactSpeedometer from "react-d3-speedometer";

function CustomSpeedometer(props) {
    return (
        <ReactSpeedometer
            width={props.width}
            needleHeightRatio={0.8}
            value={props.value * 10}
            currentValueText={props.value + "-" + props.title}
            customSegmentLabels={[
                {
                    text: "Extreme Fear",
                    position: "OUTSIDE",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "10px",
                },
                {
                    text: "Fear",
                    position: "OUTSIDE",
                    color: "rgba(255, 255, 255, 0.7)",
                },
                {
                    text: "Neutral",
                    position: "OUTSIDE",
                    color: "rgba(255, 255, 255, 0.7)",
                },
                {
                    text: "Greed",
                    position: "OUTSIDE",
                    color: "rgba(255, 255, 255, 0.7)",
                },
                {
                    text: "Extreme Greed",
                    position: "OUTSIDE",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "10px",
                },
            ]}
            ringWidth={50}
            needleTransitionDuration={6333}
            needleTransition="easeElastic"
            needleColor={"rgba(255, 255, 255, 0.7)"}
            textColor={"#fff"}
            segmentColors={[
                "#B53534",
                "#DB5F3A",
                "#F3F3F4",
                "#96BB61",
                "#559E51",
            ]}
        />
    );
}

const FearGreedPage = () => {
    const [dateUpdated, setDateUpdated] = useState("");
    const [now, setNow] = useState();
    const [prev, setPrev] = useState();
    const [lastWeek, setLastWeek] = useState();
    const [lastMonth, setLastMonth] = useState();

    const getFearGreedData = async () => {
        const data = await getFearGreed();
        setDateUpdated(data.lastUpdate.humanDate);
        setNow(data.fgi.now);
        setPrev(data.fgi.previousClose);
        setLastWeek(data.fgi.oneWeekAgo);
        setLastMonth(data.fgi.oneMonthAgo);
    };
    useEffect(() => {
        getFearGreedData();
    }, []);

    return (
        <Box justifyContent={"center"}>
            <Title
                h1="FEAR GREED INDEX"
                h2={
                    "Last Update " +
                    dateUpdated.substring(0, 10) +
                    "@FearGreedAPI"
                }
            ></Title>

            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={12} marginTop={3}>
                    <Typography variant="h4" marginBottom={5}>
                        Today
                    </Typography>
                    {now && (
                        <CustomSpeedometer
                            width={300}
                            value={now.value}
                            title={now.valueText}
                        />
                    )}
                </Grid>

                <Grid item xs={10} lg={4}>
                    <Typography variant="h4" marginBottom={5}>
                        Yesterday
                    </Typography>
                    {prev && (
                        <CustomSpeedometer
                            width={300}
                            value={prev.value}
                            title={prev.valueText}
                        />
                    )}
                </Grid>

                <Grid item xs={10} lg={4}>
                    <Typography variant="h4" marginBottom={5}>
                        Last Week
                    </Typography>
                    {lastWeek && (
                        <CustomSpeedometer
                            width={250}
                            value={lastWeek.value}
                            title={lastWeek.valueText}
                        />
                    )}
                </Grid>
                <Grid item xs={10} lg={4}>
                    <Typography variant="h4" marginBottom={5}>
                        Last Month
                    </Typography>
                    {lastMonth && (
                        <CustomSpeedometer
                            width={250}
                            value={lastMonth.value}
                            title={lastMonth.valueText}
                        />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default FearGreedPage;
