import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Title = (props) => {
    return (
        <Container sx={{ paddingTop: "2rem" }}>
            <Typography
                component="h2"
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
            >
                {props.h1}
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.primary"
                component="p"
            >
                {props.h2}
            </Typography>
        </Container>
    );
};

export default Title;
