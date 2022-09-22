import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow, Typography, Dialog, DialogActions, Slide, Button } from "@material-ui/core";
import CharacterPopup from "./popup/CharacterPopup";

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif",
    },
    characterName: {
        fontFamily: "Genshin, sans-serif",
        cursor: "pointer",
        "&:hover": {
            color: "rgb(30, 175, 255)",
            textDecoration: "underline",
        },
    },
    characterIcon: {
        marginRight: "15px",
        height: '48px',
        cursor: "pointer",
    },
    stars: {
        height: "25px",
    },
    elementIcon: {
        marginRight: "8px",
        height: '32px',
    },
    weaponIcon: {
        marginRight: "8px",
        height: '32px',
        border: "1px solid rgb(44, 49, 64)",
        borderRadius: "64px",
    },
    talentBookIcon: {
        marginRight: "8px",
        height: '48px',
    },
    avatarFlexRow: {
        display: "flex",
        alignItems: "center",
    },
    dialogRoot: {
        backgroundColor: "rgb(36, 41, 56)",
    },
    dialogContent: {
        backgroundColor: "rgb(36, 41, 56)",
        color: "white",
    },
    dialogActions: {
        backgroundColor: "rgb(36, 41, 56)",
    },
    closeButton: {
        position: "relative",
        bottom: "50px",
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
            backgroundColor: "rgb(68, 73, 88)",
        },
    },
}))(TableRow);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CharacterRow = (props) => {
    let { row, index, characters } = props;
    const classes = useStyles();
    const currentCharacter = characters.filter(char => char.name === row.name);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <StyledTableRow key={index} className={classes.root}>
                <StyledTableCell className={classes.genshinFont}>
                    <div className={classes.avatarFlexRow}>
                        <img className={classes.characterIcon} src={require(`../assets/characters/thumbs/Character_${row.name.split(" ").join("_")}_Thumb.png`).default} alt={row.name} onClick={() => handleClickOpen()} />
                        <Typography variant="body1" className={classes.characterName} onClick={() => handleClickOpen()}>{row.name}</Typography>
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
                        <img className={classes.talentBookIcon} src={require(`../assets/nations/${row.nation}.png`).default} alt={row.nation} />
                        <Typography variant="body1" className={classes.genshinFont}>{row.nation}</Typography>
                    </div>
                </StyledTableCell>
                <StyledTableCell className={classes.genshinFont} align="left">
                    <div className={classes.avatarFlexRow}>
                        <Typography variant="body1" className={classes.genshinFont}>{row.gender}</Typography>
                    </div>
                </StyledTableCell>
                <StyledTableCell className={classes.genshinFont} align="left">
                    <div className={classes.avatarFlexRow}>
                        <Typography variant="body1" className={classes.genshinFont}>{`${row.releaseDate} (${row.version})`}</Typography>
                    </div>
                </StyledTableCell>
            </StyledTableRow>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className={classes.dialogRoot}
                maxWidth={false}
            >
                <div className={classes.dialogContent}>
                    <CharacterPopup character={currentCharacter[0]} />
                    <DialogActions className={classes.dialogActions}>
                        <Button className={classes.closeButton} variant="contained" onClick={handleClose} color="secondary">
                            Close
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </React.Fragment>
    )
}

export default CharacterRow;