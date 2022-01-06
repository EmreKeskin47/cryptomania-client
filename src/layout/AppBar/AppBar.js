import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SwipeableTemporaryDrawer from "./CustomDrawer";

export default function CustomAppBar() {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <SwipeableTemporaryDrawer />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
