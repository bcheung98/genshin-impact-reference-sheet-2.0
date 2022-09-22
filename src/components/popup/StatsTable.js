import React from "react";
import { makeStyles, Table, TableBody, TableContainer, TableHead, Paper } from "@material-ui/core";
import { StyledTableCell, StyledTableAlternatingRows } from "../../helpers/StyledTable";

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif"
    },
    table: {
        backgroundColor: "rgb(44, 49, 64)",
        border: "2px solid gray",
    },
}));

const createCharacterStats = (level, hp, atk, def, critRate, critDMG, special) => {
    return { level, hp, atk, def, critRate, critDMG, special }
}

const StatsTable = (props) => {
    const classes = useStyles();
    let { stats } = props.character;

    const levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"]
    const characterStatRows = levels.map((level, index) => stats.special ? createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], stats.critRate[index], stats.critDMG[index], stats.special[index]) : createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], stats.critRate[index], stats.critDMG[index]))

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <StyledTableAlternatingRows>
                        <StyledTableCell className={classes.genshinFont} align="center">Level</StyledTableCell>
                        <StyledTableCell className={classes.genshinFont} align="center">Base HP</StyledTableCell>
                        <StyledTableCell className={classes.genshinFont} align="center">Base ATK</StyledTableCell>
                        <StyledTableCell className={classes.genshinFont} align="center">Base DEF</StyledTableCell>
                        <StyledTableCell className={classes.genshinFont} align="center">CRIT Rate</StyledTableCell>
                        <StyledTableCell className={classes.genshinFont} align="center">CRIT DMG</StyledTableCell>
                        {stats.special && <StyledTableCell className={classes.genshinFont} align="center">{stats.ascensionStat}</StyledTableCell>}
                    </StyledTableAlternatingRows>
                </TableHead>
                <TableBody>
                    {characterStatRows.map((row) => (
                        <StyledTableAlternatingRows key={row.level}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.level}
                            </StyledTableCell>
                            <StyledTableCell align="center">{Number(row.hp).toLocaleString()}</StyledTableCell>
                            <StyledTableCell align="center">{row.atk}</StyledTableCell>
                            <StyledTableCell align="center">{row.def}</StyledTableCell>
                            <StyledTableCell align="center">{row.critRate}%</StyledTableCell>
                            <StyledTableCell align="center">{row.critDMG}%</StyledTableCell>
                            {stats.special && <StyledTableCell align="center">{stats.ascensionStat !== "Elemental Mastery" ? row.special + "%" : row.special}</StyledTableCell>}
                        </StyledTableAlternatingRows>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StatsTable;