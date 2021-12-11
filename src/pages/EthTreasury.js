import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Title from "../components/Title";
import { getEthTreasury } from "../api/Coindar";
import NumberFormat from "react-number-format";
import Moment from "react-moment";

const EthTreasury = () => {
    var today = new Date();
    const [eth, setEth] = useState([]);
    const getEthData = async () => {
        const response = await getEthTreasury();
        setEth(response);
    };
    useEffect(() => {
        getEthData();
    }, []);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Grid item sm={12} justifyContent={"center"}>
            <Title
                h1="ETHEREUM TREASURY"
                h2="Public companies' ethereum holdings (Ordered by total
                        holdings descending)"
            ></Title>

            <Container sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3} justifyContent={"center"}>
                    {/* Recent Deposits */}
                    <Grid item xs={11} md={4} lg={3} justifyContent={"center"}>
                        <Paper
                            sx={{
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: 140,
                            }}
                        >
                            <Typography
                                component="h2"
                                variant="h6"
                                color="primary"
                                gutterBottom
                            >
                                Total $ Volume
                            </Typography>

                            <Typography component="p" variant="h5">
                                <NumberFormat
                                    value={eth.total_value_usd}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    decimalSeparator="        "
                                    decimalScale={0}
                                />
                            </Typography>

                            <Typography
                                paddingTop={1}
                                color="text.secondary"
                                sx={{ flex: 1 }}
                            >
                                {"updated on"}
                                <Moment format="MM/YYYY">{today}</Moment>
                            </Typography>
                        </Paper>
                        <Paper
                            sx={{
                                marginTop: 2,
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                height: 140,
                            }}
                        >
                            <Typography
                                component="h2"
                                variant="h6"
                                color="primary"
                                gutterBottom
                            >
                                Total Amount
                            </Typography>

                            <Typography component="p" variant="h5">
                                <NumberFormat
                                    value={eth.total_holdings}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"Ξ"}
                                    decimalScale={0}
                                />
                            </Typography>
                            <Typography
                                paddingTop={1}
                                color="text.secondary"
                                sx={{ flex: 1 }}
                            >
                                {"updated on"}
                                <Moment format="MM/YYYY">{today}</Moment>
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Recent Orders */}
                    <Grid item xs={11} md={8}>
                        <Paper
                            sx={{
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                            }}
                        >
                            {eth.companies && (
                                <React.Fragment>
                                    <TableContainer>
                                        <Table
                                            stickyHeader
                                            aria-label="sticky table"
                                            size="large"
                                        >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="subtitle2">
                                                            COMPANY NAME
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="subtitle2">
                                                            TOTAL HOLDING
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="subtitle2">
                                                            INITIAL INVESTMENT
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography variant="subtitle2">
                                                            CURRENT VALUE
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {eth.companies
                                                    .slice(
                                                        page * rowsPerPage,
                                                        page * rowsPerPage +
                                                            rowsPerPage
                                                    )
                                                    .map((row, id) => (
                                                        <TableRow
                                                            hover
                                                            role="checkbox"
                                                            tabIndex={-1}
                                                            key={id}
                                                        >
                                                            <TableCell>
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell>
                                                                {
                                                                    row.total_holdings
                                                                }
                                                                {"Ξ"}
                                                            </TableCell>
                                                            <TableCell>
                                                                <NumberFormat
                                                                    value={
                                                                        row.total_entry_value_usd
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                    decimalScale={
                                                                        0
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <NumberFormat
                                                                    value={
                                                                        row.total_current_value_usd
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                    decimalScale={
                                                                        0
                                                                    }
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 15, 20]}
                                        component="div"
                                        count={eth.companies.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={
                                            handleChangeRowsPerPage
                                        }
                                    />
                                </React.Fragment>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default EthTreasury;
