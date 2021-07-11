import React from "react";
import { formatTalents } from "../helpers/formatTalents";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    root: {
        width: 325,
        height: 175,
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "rgb(32, 32, 32)",
        border: "2px solid gray",
        borderRadius: "5px"
    },
    topRow: {
        margin: "auto",
        marginTop: "-15px",
        width: "95%"
    },
    name: {
        fontWeight: "bold",
        color: "white",
        marginTop: "2px",
        marginBottom: "10px",
        marginLeft: "-15px"
    },
    circleIcons: {
        position: "absolute",
        margin: "auto",
        marginTop: "-40px",
        marginLeft: "225px",
    },
    elementIcon: {
        height: "35px",
    },
    weaponIcon: {
        height: "35px",
    },
    leftColumn: {
        marginTop: "5px",
        marginLeft: "-40px",
        width: "100px"
    },
    img: {
        margin: 'auto',
        border: "2px solid gray",
        borderRadius: "5px",
        width: '90px',
        height: '90px',
        display: "block"
    },
    stars: {
        height: "25px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    },
    materialRow: {
        marginLeft: "-30px"
    },
    materialImage: {
        height: "48px",
        border: "2px solid gray",
        borderRadius: "5px",
        margin: "5px"
    }
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

const CharCardSmall = (props) => {
    const classes = useStyles();
    let { name, rarity, element, weapon } = props.character;
    let { talents, ascensionMat, localMat, commonMat, bossMat } = props.character.materials;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className={classes.topRow}>
                    <Typography className={classes.name} variant="h5" component="h2">
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
                        <img className={classes.img} src={require(`../assets/characters/icons/Character_${name.split(" ").join("_")}_Icon.png`).default} alt={name} />
                        <img className={classes.stars} src={require(`../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid className={classes.materialRow}>
                            <MaterialTooltip title={formatTalents(talents)} arrow placement="top">
                                <img className={classes.materialImage} src={require(`../assets/materials/talent_mats/${talents}.png`).default} alt={talents} />
                            </MaterialTooltip>
                            <MaterialTooltip title={ascensionMat} arrow placement="top">
                                <img className={classes.materialImage} src={require(`../assets/materials/ascension_mats/${ascensionMat.split(" ").join("_")}.png`).default} alt={ascensionMat} />
                            </MaterialTooltip>
                            <MaterialTooltip title={`${element} Gemstone`} arrow placement="top">
                                <img className={classes.materialImage} src={require(`../assets/materials/ascension_gems/${element}_Gemstone.png`).default} alt={element} />
                            </MaterialTooltip>
                        </Grid>
                        <Grid className={classes.materialRow}>
                            <MaterialTooltip title={localMat} arrow placement="top">
                                <img className={classes.materialImage} src={require(`../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                            </MaterialTooltip>
                            <MaterialTooltip title={commonMat} arrow placement="top">
                                <img className={classes.materialImage} src={require(`../assets/materials/common_mats/${commonMat.split(" ").join("_")}.png`).default} alt={commonMat} />
                            </MaterialTooltip>
                            <MaterialTooltip title={bossMat} arrow placement="top">
                                <img className={classes.materialImage} src={require(`../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                            </MaterialTooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
}

export default CharCardSmall;