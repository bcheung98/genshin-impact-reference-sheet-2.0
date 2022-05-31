import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    table: {
        backgroundColor: "rgb(44, 49, 64)",
        border: "2px solid gray",
    },
}));

const StyledTableRows = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: "rgb(64, 69, 84)",
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "8px",
        border: "2px solid gray",
    },
    head: {
        backgroundColor: "rgb(24, 29, 44)",
        color: "white",
    },
    body: {
        color: "white",
    },
}))(TableCell);

const createTalentScaling = (level, a, b, c, d, e, f, g, h, i, j, k, l, m) => {
    return { level, a, b, c, d, e, f, g, h, i, j, k, l, m }
}

const TalentScalingTable = (props) => {
    const classes = useStyles();

    const rows = props.stats.map(stat => createTalentScaling(stat[0], stat[1], stat[2], stat[3], stat[4], stat[5], stat[6], stat[7], stat[8], stat[9], stat[10], stat[11], stat[12], stat[13]));

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell align="center">LVL</StyledTableCell>
                        {[...Array(13).keys()].map(i => <StyledTableCell key={i} align="center">{i + 1}</StyledTableCell>)}
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRows key={row.level}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.level}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.a}</StyledTableCell>
                            {props.attackType !== "altsprint" &&
                                <React.Fragment>
                                    <StyledTableCell align="center">{row.b}</StyledTableCell>
                                    <StyledTableCell align="center">{row.c}</StyledTableCell>
                                    <StyledTableCell align="center">{row.d}</StyledTableCell>
                                    <StyledTableCell align="center">{row.e}</StyledTableCell>
                                    <StyledTableCell align="center">{row.f}</StyledTableCell>
                                    <StyledTableCell align="center">{row.g}</StyledTableCell>
                                    <StyledTableCell align="center">{row.h}</StyledTableCell>
                                    <StyledTableCell align="center">{row.i}</StyledTableCell>
                                    <StyledTableCell align="center">{row.j}</StyledTableCell>
                                    <StyledTableCell align="center">{row.k}</StyledTableCell>
                                    <StyledTableCell align="center">{row.l}</StyledTableCell>
                                    <StyledTableCell align="center">{row.m}</StyledTableCell>
                                </React.Fragment>
                            }
                        </StyledTableRows>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default TalentScalingTable;