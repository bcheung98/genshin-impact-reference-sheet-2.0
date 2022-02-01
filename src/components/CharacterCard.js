import React from "react";
import { formatTalents, formatCommonMats, formatBossMats, formatAscensionMats, formatGemstone } from "../helpers/TooltipText";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import "../css/characterCard.css";
import CharacterPopup from "./CharacterPopup";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 325,
        height: 200,
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "rgb(40, 40, 40)",
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
        border: "1px solid rgb(40, 40, 40)",
        borderRadius: "64px",
    },
    weaponIcon: {
        height: "35px",
        border: "1px solid rgb(40, 40, 40)",
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
        backgroundColor: "rgb(32, 32, 32)",
    },
    moreInfoButton: {
        marginTop: "-10px",
        marginLeft: "-1px",
        color: "rgb(10, 155, 201)"
    },
    dialogRoot: {
        margin: "auto",
        maxWidth: "95vw",
    },
    dialogContent: {
        backgroundColor: "rgb(32, 32, 32)",
        border: "2px solid gray",
        borderRadius: "5px",
        color: "white",
    },
    characterCard: {
        border: "2px solid gray",
        borderRadius: "5px",
        height: "600px",
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MaterialTooltip = withStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: theme.typography.pxToRem(14),
    },
}))(Tooltip);

const CharacterCard = (props) => {
    const classes = useStyles();
    let { name, rarity, element, weapon } = props.character;
    let { talentBook, ascensionMat, localMat, commonMat, bossMat } = props.character.materials;

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                            <img className={classes.characterIcon} src={require(`../assets/characters/thumbs/Character_${name.split(" ").join("_")}_Thumb.png`).default} alt={name} />
                            <img className={classes.stars} src={require(`../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid className={classes.materialRow}>
                                <MaterialTooltip title={formatTalents(talentBook)} arrow placement="top">
                                    <img className={classes.materialImage} src={require(`../assets/materials/talent_mats/${talentBook}.png`).default} alt={talentBook} />
                                </MaterialTooltip>
                                <MaterialTooltip title={formatCommonMats(commonMat)} arrow placement="top">
                                    <img className={classes.materialImage} src={require(`../assets/materials/common_mats/${commonMat.split(" ").join("_")}.png`).default} alt={commonMat} />
                                </MaterialTooltip>
                                <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                                    <img className={classes.materialImage} src={require(`../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                                </MaterialTooltip>
                            </Grid>
                            <Grid className={classes.materialRow}>
                                <MaterialTooltip title={formatGemstone(element)} arrow placement="top">
                                    <img className={classes.materialImage} src={require(`../assets/materials/ascension_gems/${element}_Gemstone.png`).default} alt={element} />
                                </MaterialTooltip>
                                <MaterialTooltip title={formatAscensionMats(ascensionMat)} arrow placement="top">
                                    <img className={classes.materialImage} src={require(`../assets/materials/ascension_mats/${ascensionMat.split(" ").join("_")}.png`).default} alt={ascensionMat} />
                                </MaterialTooltip>
                                <MaterialTooltip title={localMat} arrow placement="top">
                                    <img className={classes.materialImage} src={require(`../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                                </MaterialTooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button size="small" className={classes.moreInfoButton} onClick={() => handleClickOpen()}>
                        More Info
                    </Button>
                </CardContent>
            </Card >
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className={classes.dialogRoot}
                maxWidth={false}
                fullWidth
            >
                <div className={classes.dialogContent}>
                    <CharacterPopup character={props.character} />
                    <DialogActions>
                        <Button variant="contained" onClick={handleClose} color="secondary">
                            Close
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </React.Fragment>
    )
}

export default CharacterCard;