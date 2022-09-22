import React from "react";
import { makeStyles, Grid, Card, CardContent, Typography, Button, Dialog, DialogActions, Slide } from "@material-ui/core";
import "../css/characterCard.css";
import CharacterMaterialGrid from "./CharacterMaterialGrid";
import CharacterPopup from "./popup/CharacterPopup";
import { MaterialTooltip } from "../helpers/MaterialTooltip";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 325,
        height: 200,
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "rgb(44, 49, 64)",
        border: "2px solid gray",
        borderRadius: "5px",
        fontFamily: "Genshin, sans-serif",
    },
    topRow: {
        margin: "auto",
        marginTop: "-15px",
        width: "95%",
    },
    name: {
        fontFamily: "Genshin, sans-serif",
        color: "white",
        marginTop: "2px",
        marginBottom: "10px",
        marginLeft: "-15px",
    },
    circleIcons: {
        position: "absolute",
        margin: "auto",
        marginTop: "-40px",
        marginLeft: "225px",
    },
    elementIcon: {
        height: "35px",
        border: "1px solid rgb(44, 49, 64)",
        borderRadius: "64px",
    },
    weaponIcon: {
        height: "35px",
        border: "1px solid rgb(44, 49, 64)",
        borderRadius: "64px",
    },
    leftColumn: {
        marginTop: "5px",
        marginLeft: "-40px",
        width: "100px",
    },
    characterIcon: {
        margin: 'auto',
        border: "2px solid gray",
        borderRadius: "5px",
        width: '90px',
        height: '90px',
        display: "block",
        backgroundColor: "rgb(32, 32, 32)",
    },
    stars: {
        height: "25px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2px",
        display: "block",
    },
    materialRow: {
        marginLeft: "-30px",
    },
    materialImage: {
        height: "48px",
        border: "2px solid gray",
        borderRadius: "5px",
        margin: "5px",
        backgroundColor: "rgb(36, 41, 56)",
    },
    moreInfoButton: {
        marginTop: "-10px",
        marginLeft: "-1px",
        color: "rgb(10, 155, 201)"
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CharacterCard = (props) => {
    const classes = useStyles();
    let { name, rarity, element, weapon } = props.character;

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const characterIconBackground = {
        backgroundImage: "url(" + require(`../assets/backgrounds/Background_${rarity}_Star.png`).default + ")",
        backgroundSize: "100%"
    }

    return (
        <React.Fragment>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <div className={classes.topRow}>
                        <Typography className={classes.name} variant="h5">
                            {name}
                        </Typography>
                        <div className={classes.circleIcons}>
                            <MaterialTooltip title={element} arrow placement="top">
                                <img className={classes.elementIcon} src={require(`../assets/elements/Element_${element}.png`).default} alt={element} />
                            </MaterialTooltip>
                            <MaterialTooltip title={weapon} arrow placement="top">
                                <img className={classes.weaponIcon} src={require(`../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`).default} alt={weapon} />
                            </MaterialTooltip>
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs className={classes.leftColumn}>
                            <img className={classes.characterIcon} src={require(`../assets/characters/thumbs/Character_${name.split(" ").join("_")}_Thumb.png`).default} alt={name} style={characterIconBackground} />
                            <img className={classes.stars} src={require(`../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                        </Grid>
                        <CharacterMaterialGrid character={props.character} imageSize="48px" margin="-30px" />
                    </Grid>
                    <Button size="small" className={classes.moreInfoButton} onClick={() => handleClickOpen()}>
                        More Info
                    </Button>
                </CardContent>
            </Card >
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className={classes.dialogRoot}
                maxWidth={false}
            >
                <div className={classes.dialogContent}>
                    <CharacterPopup character={props.character} />
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

export default CharacterCard;