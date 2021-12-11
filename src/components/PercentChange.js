import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const PercentChange = (props) => {
    var { change, decimalTrim } = props;
    if (change.length > 4) {
        change = change.substring(0, 4);
    }
    const textColor = change >= 0 ? "#16c784" : "#ea3943";
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            {change >= 0 ? (
                <ArrowDropUpIcon sx={{ fontSize: "22px", color: textColor }} />
            ) : (
                <ArrowDropDownIcon
                    sx={{ fontSize: "22px", color: textColor }}
                />
            )}
            <Typography variant="body2" color={textColor}>
                {decimalTrim ? change.toFixed(2) : change}%
            </Typography>
        </Box>
    );
};

export default PercentChange;
