import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif",
        color: "white !important",
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
}));

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

const CharacterRow = (props) => {
    let { row, index } = props;
    const classes = useStyles();
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
}

export default CharacterRow;