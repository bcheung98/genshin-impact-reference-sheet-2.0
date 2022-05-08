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
    head: {
        backgroundColor: "rgb(24, 29, 44)",
        color: "white",
    },
    body: {
        color: "white",
    },
}))(TableCell);

const createTalentScaling = (level, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen) => {
    return { level, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen }
}

const TalentScalingTable = (props) => {
    const classes = useStyles();

    const rows = props.stats ? props.stats.map(stat => stat.length !== 2 ? createTalentScaling(stat[0], stat[1], stat[2], stat[3], stat[4], stat[5], stat[6], stat[7], stat[8], stat[9], stat[10], stat[11], stat[12], stat[13]) : createTalentScaling(stat[0], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1], stat[1])) : null;

    return (
        <React.Fragment>
            {console.log(props.stats)}
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <StyledTableRows>
                            <StyledTableCell align="center">LVL</StyledTableCell>
                            {[...Array(13).keys()].map(i => <StyledTableCell key={i} align="center">{i + 1}</StyledTableCell>)}
                        </StyledTableRows>
                    </TableHead>
                    <TableBody>
                        {rows !== null ? rows.map(row => (
                            <StyledTableRows key={row.level}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.level}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.one}</StyledTableCell>
                                {props.attackType !== "altsprint" &&
                                    <React.Fragment>
                                        <StyledTableCell align="center">{row.two}</StyledTableCell>
                                        <StyledTableCell align="center">{row.three}</StyledTableCell>
                                        <StyledTableCell align="center">{row.four}</StyledTableCell>
                                        <StyledTableCell align="center">{row.five}</StyledTableCell>
                                        <StyledTableCell align="center">{row.six}</StyledTableCell>
                                        <StyledTableCell align="center">{row.seven}</StyledTableCell>
                                        <StyledTableCell align="center">{row.eight}</StyledTableCell>
                                        <StyledTableCell align="center">{row.nine}</StyledTableCell>
                                        <StyledTableCell align="center">{row.ten}</StyledTableCell>
                                        <StyledTableCell align="center">{row.eleven}</StyledTableCell>
                                        <StyledTableCell align="center">{row.twelve}</StyledTableCell>
                                        <StyledTableCell align="center">{row.thirteen}</StyledTableCell>
                                    </React.Fragment>
                                }
                            </StyledTableRows>
                        )) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )

}

export default TalentScalingTable;