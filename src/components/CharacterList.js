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
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "75%",
        margin: "auto",
    },
    genshinFont: {
        fontFamily: "Genshin, sans-serif",
        color: "white !important",
    },
    paper: {
        margin: "50px",
        backgroundColor: "rgb(40, 40, 40)",
        border: "2px solid gray",
        color: "white",
    },
    table: {
        minWidth: 750,
        color: "white",
    },
    charCount: {
        fontFamily: "Genshin, sans-serif",
        textAlign: "center",
        margin: "10px",
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
    characterIcon: {
        marginRight: "20px",
        height: '48px',
    },
    stars: {
        height: "25px",
    },
    elementIcon: {
        marginRight: "10px",
        height: '32px',
    },
    weaponIcon: {
        marginRight: "10px",
        height: '32px',
    },
    talentBookIcon: {
        marginRight: "10px",
        height: '48px',
    },
    avatarFlexRow: {
        display: "flex",
        alignItems: "center",
    },
    activeSortIcon: {
        color: "red !important",
        opacity: 1,
    },
    inactiveSortIcon: {
        color: "white !important",
        opacity: 0
    },
    divider: {
        backgroundColor: "rgb(224, 224, 224)",
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
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "element", label: "Element" },
    { id: "weapon", label: "Weapon" },
    { id: "nation", label: "Nation" },
];

const CharacterListHead = (props) => {
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
                            IconComponent={KeyboardArrowDownIcon}
                            classes={{ icon: ((orderBy === headCell.id) ? classes.activeSortIcon : classes.inactiveSortIcon) }}
                        >
                            <Typography variant="h6" className={classes.genshinFont}>{headCell.label}</Typography>
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
                    <Typography variant="h5" className={classes.genshinFont, classes.charCount}>{props.characters.length} Characters</Typography>
                    <Divider className={classes.divider} />
                    <Table className={classes.table} size="small">
                        <CharacterListHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .map((row, index) => {
                                    return (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell className={classes.genshinFont}>
                                                <div className={classes.avatarFlexRow}>
                                                    <img className={classes.characterIcon} src={require(`../assets/characters/icons/Character_${row.name.split(" ").join("_")}_Icon.png`).default} alt={row.name} />
                                                    <Typography variant="body1" className={classes.genshinFont}>{row.name}</Typography>
                                                </div>
                                            </StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">
                                                <div className={classes.avatarFlexRow}>
                                                    <img className={classes.stars} src={require(`../assets/stars/Icon_${row.rarity}_Stars.png`).default} alt={row.rarity} />
                                                </div>
                                            </StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">
                                                <div className={classes.avatarFlexRow}>
                                                    <img className={classes.elementIcon} src={require(`../assets/elements/Element_${row.element}.png`).default} alt={row.element} />
                                                    <Typography variant="body1" className={classes.genshinFont}>{row.element}</Typography>
                                                </div>
                                            </StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">
                                                <div className={classes.avatarFlexRow}>
                                                    <img className={classes.weaponIcon} src={require(`../assets/weapons/Weapon-class-${row.weapon.toLowerCase()}-icon.png`).default} alt={row.weapon} />
                                                    <Typography variant="body1" className={classes.genshinFont}>{row.weapon}</Typography>
                                                </div>
                                            </StyledTableCell>
                                            <StyledTableCell className={classes.genshinFont} align="left">
                                                <div className={classes.avatarFlexRow}>
                                                    {<img className={classes.talentBookIcon} src={require(`../assets/nations/${row.nation}.png`).default} alt={row.nation} />}
                                                    <Typography variant="body1" className={classes.genshinFont}>{row.nation}</Typography>
                                                </div>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default CharacterList;