import { Grid } from "@mui/material";
import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <Grid item xs={12} marginTop={10}>
            <Loader type="Bars" color="#22a9e3" height={200} width={200} />
        </Grid>
    );
};

export default Loading;
