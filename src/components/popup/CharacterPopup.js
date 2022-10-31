import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Grid, Typography, DialogContent, DialogTitle, Tabs, Tab, Box, AppBar } from "@material-ui/core";
import CharacterMaterialGrid from "../CharacterMaterialGrid";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";
import TalentDisplay from "./TalentDisplay";
import ConstellationDisplay from "./ConstellationDisplay";
import StatsTable from "./StatsTable";
import AscensionTable from "./AscensionTable";

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif"
    },
    dialogContentRoot: {
        backgroundColor: "rgb(36, 41, 56)",
    },
    dialogMain: {
        marginTop: "-15px",
    },
    dialogGrid: {
        flexGrow: 1,
    },
    dialogCircleIconGroup: {
        marginLeft: "-7px",
    },
    dialogCircleIcon: {
        border: "1px solid rgba(36, 41, 56, 0)",
        borderRadius: "64px",
    },
    dialogTitleLeftColumn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    dialogTitleMiddleColumn: {
        textAlign: "center",
    },
    dialogTitleRightColumn: {
        textAlign: "center",
    },
    dialogStars: {
        height: "35px",
        marginLeft: "-5px",
    },
    characterCard: {
        border: "2px solid gray",
        borderRadius: "5px",
        height: "600px",
    },
    talentContainer: {
        border: "2px solid gray",
        borderRadius: "5px",
        height: "604px",
        marginTop: "8px",
        padding: "0px !important",
        overflowY: "hidden",
    },
    horizontalTabSelector: {
        fontFamily: "Genshin, sans-serif",
        width: "210px",
    },
    dialogDescription: {
        textAlign: "center",
    },
    nationIconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    nationIcon: {
        alignItems: "center",
        height: "86px",
    },
}));

function TabPanelHorizontal(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanelHorizontal.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const CharacterPopup = (props) => {
    const classes = useStyles();
    let { name, title, rarity, element, weapon, constellation, description, birthday, nation, voiceActors } = props.character;

    const [valueHorizontal, setValueHorizontal] = React.useState(0);
    const handleChangeHorizontal = (event, newValue) => {
        setValueHorizontal(newValue);
    };

    return (
        <React.Fragment>
            <DialogTitle>
                <div className={classes.dialogGrid}>
                    <Grid container spacing={3}>
                        <Grid item xs className={classes.dialogTitleLeftColumn}>
                            <CharacterMaterialGrid character={props.character} imageSize="56px" margin="-5px" />
                        </Grid>
                        <Grid item xs className={classes.dialogTitleMiddleColumn}>
                            {props.character.fullname ? <Typography className={classes.genshinFont} variant="h4">{props.character.fullname}</Typography> : <Typography style={{ fontFamily: "Genshin" }} variant="h4">{name}</Typography>}
                            <Typography variant="body1" className={classes.genshinFont}><i>{title}</i></Typography>
                            <img className={classes.dialogStars} src={require(`../../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                            <div className={classes.dialogCircleIconGroup}>
                                <MaterialTooltip title={element} arrow placement="top">
                                    <img src={require(`../../assets/elements/Element_${element}.png`).default} className={classes.dialogCircleIcon} alt={element} />
                                </MaterialTooltip>
                                <MaterialTooltip title={weapon} arrow placement="top">
                                    <img src={require(`../../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`).default} className={classes.dialogCircleIcon} alt={weapon} />
                                </MaterialTooltip>
                            </div>
                        </Grid>
                        <Grid item xs className={classes.dialogTitleRightColumn}>
                            <Typography className={classes.genshinFont}><b>Constellation:</b> {constellation.name}</Typography>
                            <Typography className={classes.genshinFont}><b>Birthday:</b> {birthday}</Typography>
                            <br />
                            <Typography className={classes.genshinFont}><b>Voice Actors:</b></Typography>
                            <Typography><b>EN:</b> {voiceActors["en"]}</Typography>
                            <Typography><b>JP:</b> {voiceActors["jp"]}</Typography>
                        </Grid>
                    </Grid>
                </div>
            </DialogTitle>
            <DialogContent className={classes.dialogContentRoot}>
                <Grid container spacing={2} className={classes.dialogMain}>
                    <Grid item>
                        <img src={require(`../../assets/characters/avatars/Character_${name.split(" ").join("_")}_Avatar.png`).default} alt={name} className={classes.characterCard} />
                    </Grid>
                    <Grid item xs className={classes.talentContainer}>
                        <div>
                            <AppBar position="static" className={`appbar-${element.toLowerCase()}`}>
                                <Tabs value={valueHorizontal} onChange={handleChangeHorizontal} classes={{ indicator: "appbar-indicator" }}>
                                    <Tab className={classes.horizontalTabSelector} label="Talents" />
                                    <Tab className={classes.horizontalTabSelector} label="Constellation" />
                                    <Tab className={classes.horizontalTabSelector} label="Stats" />
                                    <Tab className={classes.horizontalTabSelector} label="Ascension" />
                                </Tabs>
                            </AppBar>
                            <TabPanelHorizontal value={valueHorizontal} index={0}>
                                <TalentDisplay character={props.character} />
                            </TabPanelHorizontal>
                            <TabPanelHorizontal value={valueHorizontal} index={1}>
                                <ConstellationDisplay character={props.character} />
                            </TabPanelHorizontal>
                            <TabPanelHorizontal value={valueHorizontal} index={2}>
                                <StatsTable character={props.character} />
                            </TabPanelHorizontal>
                            <TabPanelHorizontal value={valueHorizontal} index={3}>
                                <AscensionTable character={props.character} />
                            </TabPanelHorizontal>
                        </div>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogContent className={classes.dialogContentRoot}>
                <div className={classes.dialogDescription}>
                    <Typography variant="subtitle2" className={classes.genshinFont}><i>{description}</i></Typography>
                </div>
                <div className={classes.nationIconContainer}>
                    <img className={classes.nationIcon} src={require(`../../assets/nations/${nation}.png`).default} alt={nation} />
                </div>
            </DialogContent>
        </React.Fragment >
    )
}

export default CharacterPopup;