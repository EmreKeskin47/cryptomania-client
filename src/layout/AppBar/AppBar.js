import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SwipeableTemporaryDrawer from "./CustomDrawer";
import { mainIconList } from "./IconList";

export default function SearchAppBar() {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <SwipeableTemporaryDrawer />

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        CryptoMania
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    width: 50,
                    alignItems: "center",
                    height: "100%",
                    display: "flex",
                }}
            >
                {mainIconList}
            </Box>
        </Box>
    );
}
