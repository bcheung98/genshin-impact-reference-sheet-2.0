import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    genshinFont: {
        fontFamily: "Genshin, sans-serif",
        color: "white !important",
    },
    paper: {
        margin: "50px",
        backgroundColor: "rgb(16, 16, 16)",
        border: "2px solid gray",
        color: "white",
    },
    table: {
        minWidth: 750,
        color: "white",
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1,
    },
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: "name", numeric: false, label: "Name" },
    { id: "rarity", numeric: true, label: "Rarity" },
    { id: "element", numeric: true, label: "Element" },
    { id: "weapon", numeric: true, label: "Weapon" },
    { id: "nation", numeric: true, label: "Nation" },
];

function CharacterListHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        sortDirection={orderBy === headCell.id ? order : false}
                        className={classes.genshinFont}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                            className={classes.genshinFont}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

CharacterListHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
};

const StyledTableCell = withStyles((theme) => ({
    head: {
        color: "white",
    },
    body: {
        color: "white",
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "rgb(32, 32, 32)",
        },
        '&:hover': {
            backgroundColor: "rgb(64, 64, 64)",
        },
    },
}))(TableRow);

const createData = (name, rarity, element, weapon, nation) => {
    return { name, rarity, element, weapon, nation };
}

const CharacterList = (props) => {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("name");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const rows = props.characters.map(char => createData(char.name, char.rarity, char.element, char.weapon, char.nation));

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table}>
                        <CharacterListHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <StyledTableRow
                                            tabIndex={-1}
                                            key={row.name}
                                        >
                                            <StyledTableCell className={classes.genshinFont} component="th" id={labelId} scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">{row.rarity}</StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">{row.element}</StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">{row.weapon}</StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">{row.nation}</StyledTableCell>
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default CharacterList;