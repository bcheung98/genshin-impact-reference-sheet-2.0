import { withStyles, TableCell, TableRow } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "5px",
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

export const StyledTableAlternatingRows = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: "rgb(24, 29, 44)",
        },
        '&:hover': {
            backgroundColor: "rgb(64, 69, 84)",
        },
    },
}))(TableRow);