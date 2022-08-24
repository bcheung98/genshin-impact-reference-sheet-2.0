import React from "react";
import parse from "html-react-parser";
import PropTypes from 'prop-types';
import { makeStyles, withStyles, Grid, Typography, DialogContent, DialogTitle, Divider, Tabs, Tab, Box, AppBar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../css/characterCard.css";
import CharacterMaterialGrid from "./CharacterMaterialGrid";
import TalentScalingTable from "./TalentScalingTable";
import { formatCommonMats, formatBossMats, formatGemstone } from "../helpers/TooltipText";
import { FormatTalentKey } from "../helpers/FormatTalentKey";
import { MaterialTooltip } from "../helpers/MaterialTooltip";

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif"
    },
    splashText: {
        fontSize: "11.5pt",
        color: "rgb(225, 225, 225)",
    },
    dialogContentRoot: {
        backgroundColor: "rgb(36, 41, 56)",
    },
    divider: {
        backgroundColor: "gray",
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
        border: "1px solid rgb(36, 41, 56)",
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
    talentDisplay: {
        flexGrow: 1,
        display: 'flex',
    },
    constellationDisplay: {
        overflowY: "auto",
        height: "500px",
        paddingRight: "15px",
    },
    tabs: {
        marginLeft: "-25px",
        marginTop: "-24px",
        minWidth: "125px",
        width: "225px",
        height: "650px"
    },
    verticalTabContent: {
        height: "550px",
        minWidth: "100px",
        width: "1450px",
        marginTop: "-15px",
        overflowX: "auto",
    },
    horizontalTabSelector: {
        fontFamily: "Genshin, sans-serif",
        width: "210px",
    },
    verticalTabSelector: {
        fontFamily: "Genshin, sans-serif",
        textTransform: "none",
        borderBottom: "2px solid gray",
        borderRight: "2px solid gray",
        minHeight: "50px",
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
    table: {
        backgroundColor: "rgb(44, 49, 64)",
        border: "2px solid gray",
    },
    avatarHeader: {
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        display: "flex",
        flexDirection: "column",
        marginRight: "15px",
        width: "64px",
        height: "64px",
        border: "2px solid gray",
    },
    bar: {
        color: "white",
        backgroundColor: "rgb(44, 49, 64)",
        border: "2px solid gray",
    },
    subBar: {
        color: "white",
        backgroundColor: "rgb(36, 41, 56)",
    },
    accordion: {
        color: "white",
        backgroundColor: "rgb(36, 41, 56)",
    },
    summary: {
        marginBottom: "-5px",
        textAlign: "center",
        fontFamily: "Genshin, sans-serif",
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

function TabPanelVertical(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
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

TabPanelVertical.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const StyledTableCell = withStyles((theme) => ({
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

const StyledTableAlternatingRows = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: "rgb(24, 29, 44)",
        },
        '&:hover': {
            backgroundColor: "rgb(64, 69, 84)",
        },
    },
}))(TableRow);

const materialImage = {
    height: "40px",
    border: "2px solid gray",
    borderRadius: "5px",
    margin: "5px",
    backgroundColor: "rgb(36, 41, 56)",
}

const ascensionLegend = {
    gemstone: {
        "1-20": "Sliver",
        "20-40": "Sliver",
        "40-50": "Fragment",
        "50-60": "Fragment",
        "60-70": "Chunk",
        "70-80": "Chunk",
        "80-90": "Gemstone"
    },
    commonMat: {
        "1-20": "1",
        "20-40": "1",
        "40-50": "1",
        "50-60": "2",
        "60-70": "2",
        "70-80": "3",
        "80-90": "3"
    }
}

const createCharacterStats = (level, hp, atk, def, critRate, critDMG, special) => {
    return { level, hp, atk, def, critRate, critDMG, special }
}

const createAscStats = (phase, ascLevel, quantity) => {
    return { phase, ascLevel, quantity }
}

const CharacterPopup = (props) => {
    const classes = useStyles();
    let { name, title, rarity, element, weapon, talents, constellation, stats, description, birthday, nation, voiceActors } = props.character;
    let { bossMat, localMat, commonMat } = props.character.materials;

    const [valueHorizontal, setValueHorizontal] = React.useState(0);
    const handleChangeHorizontal = (event, newValue) => {
        setValueHorizontal(newValue);
    };

    const [valueVerticalTalent, setValueVerticalTalent] = React.useState(0);
    const handleChangeVerticalTalent = (event, newValue) => {
        setValueVerticalTalent(newValue);
    };

    const levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"]
    const ascLevels = ["1-20", "20-40", "40-50", "50-60", "60-70", "70-80", "80-90"]
    const materialQuantity = [["0", "0", "0", "0"], ["1", "0", "3", "3"], ["3", "2", "10", "15"], ["6", "4", "20", "12"], ["3", "8", "30", "18"], ["6", "12", "45", "12"], ["6", "20", "60", "24"]]

    const characterStatRows = levels.map((level, index) => stats.special ? createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], stats.critRate[index], stats.critDMG[index], stats.special[index]) : createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], stats.critRate[index], stats.critDMG[index]))

    const characterAscStatRows = ascLevels.map((level, index) => createAscStats(index, level, materialQuantity[index]))

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
                            <img className={classes.dialogStars} src={require(`../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                            <div className={classes.dialogCircleIconGroup}>
                                <MaterialTooltip title={element} arrow placement="top">
                                    <img src={require(`../assets/elements/Element_${element}.png`).default} className={classes.dialogCircleIcon} alt={element} />
                                </MaterialTooltip>
                                <MaterialTooltip title={weapon} arrow placement="top">
                                    <img src={require(`../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`).default} className={classes.dialogCircleIcon} alt={weapon} />
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
                        <img src={require(`../assets/characters/avatars/Character_${name.split(" ").join("_")}_Avatar.png`).default} alt={name} className={classes.characterCard} />
                    </Grid>
                    <Grid item xs className={classes.talentContainer}>
                        <div>
                            <AppBar position="static" className={`appbar-${element.toLowerCase()}`}>
                                <Tabs
                                    value={valueHorizontal}
                                    onChange={handleChangeHorizontal}
                                    classes={{ indicator: "appbar-indicator" }}
                                >
                                    <Tab className={classes.horizontalTabSelector} label="Talents" />
                                    <Tab className={classes.horizontalTabSelector} label="Constellation" />
                                    <Tab className={classes.horizontalTabSelector} label="Stats" />
                                    <Tab className={classes.horizontalTabSelector} label="Ascension" />
                                </Tabs>
                            </AppBar>
                            <TabPanelHorizontal value={valueHorizontal} index={0}>
                                <div className={classes.talentDisplay}>
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={valueVerticalTalent}
                                        onChange={handleChangeVerticalTalent}
                                        classes={{ indicator: `appbar-${element.toLowerCase()}` }}
                                        className={classes.tabs}
                                    >
                                        {Object.entries(talents).map(([k, v]) => <Tab key={k} className={classes.verticalTabSelector} label={`${v.name}`} />)}
                                    </Tabs>
                                    {Object.keys(talents).map((key, index) => {
                                        return (
                                            <TabPanelVertical key={key} value={valueVerticalTalent} index={index} className={classes.verticalTabContent}>
                                                <Typography className={classes.genshinFont} variant="body1" component="p"><i>{FormatTalentKey(key).toUpperCase()}</i></Typography>
                                                <br />
                                                <div className={classes.avatarHeader}>
                                                    {
                                                        key === "attack" ? <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../assets/characters/talents/_${weapon.toLowerCase()}.png`).default} className={classes.avatar} /> : <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../assets/characters/talents/${name.split(" ").join("_").toLowerCase()}_${key}.png`).default} className={classes.avatar} />
                                                    }
                                                    <Typography className={classes.genshinFont} variant="h5" component="p">{talents[key].name}</Typography>
                                                </div>
                                                <br />
                                                {parse(talents[key].description)}
                                                {
                                                    talents[key].splash &&
                                                    <React.Fragment>
                                                        <br /><br />
                                                        <i className={classes.splashText}>{parse(talents[key].splash)}</i>
                                                    </React.Fragment>
                                                }
                                                <br /><br />
                                                {
                                                    ["attack", "skill", "burst", "altsprint"].includes(key) &&
                                                    <Paper className={classes.bar}>
                                                        <Accordion className={classes.subBar}>
                                                            <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                                                                <Typography>Talent Scaling</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <TalentScalingTable attackType={key} stats={talents[key].scaling} />
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </Paper>
                                                }
                                            </TabPanelVertical>
                                        )
                                    })}
                                </div>
                            </TabPanelHorizontal>
                            <TabPanelHorizontal value={valueHorizontal} index={1}>
                                <div className={classes.constellationDisplay}>
                                    <div className={classes.avatarHeader}>
                                        <Avatar alt={constellation.c1.name} src={require(`../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c1.png`).default} className={classes.avatar} />
                                        <Typography className={classes.genshinFont} variant="h5">C1 - {constellation.c1.name}</Typography>
                                    </div>
                                    <br />
                                    {parse(constellation.c1.description)}
                                    <br /><br />
                                    <Divider className={classes.divider} />
                                    <br />
                                    <div className={classes.avatarHeader}>
                                        <Avatar alt={constellation.c2.name} src={require(`../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c2.png`).default} className={classes.avatar} />
                                        <Typography className={classes.genshinFont} variant="h5">C2 - {constellation.c2.name}</Typography>
                                    </div>
                                    <br />
                                    {parse(constellation.c2.description)}
                                    <br /><br />
                                    <Divider className={classes.divider} />
                                    <br />
                                    <div className={classes.avatarHeader}>
                                        <Avatar alt={constellation.c3.name} src={require(`../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c3.png`).default} className={classes.avatar} />
                                        <Typography className={classes.genshinFont} variant="h5">C3 - {constellation.c3.name}</Typography>
                                    </div>
                                    <br />
                                    {parse(constellation.c3.description)}
                                    <br /><br />
                                    <Divider className={classes.divider} />
                                    <br />
                                    <div className={classes.avatarHeader}>
                                        <Avatar alt={constellation.c4.name} src={require(`../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c4.png`).default} className={classes.avatar} />
                                        <Typography className={classes.genshinFont} variant="h5">C4 - {constellation.c4.name}</Typography>
                                    </div>
                                    <br />
                                    {parse(constellation.c4.description)}
                                    <br /><br />
                                    <Divider className={classes.divider} />
                                    <br />
                                    <div className={classes.avatarHeader}>
                                        <Avatar alt={constellation.c5.name} src={require(`../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c5.png`).default} className={classes.avatar} />
                                        <Typography className={classes.genshinFont} variant="h5">C5 - {constellation.c5.name}</Typography>
                                    </div>
                                    <br />
                                    {parse(constellation.c5.description)}
                                    <br /><br />
                                    <Divider className={classes.divider} />
                                    <br />
                                    <div className={classes.avatarHeader}>
                                        <Avatar alt={constellation.c6.name} src={require(`../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c6.png`).default} className={classes.avatar} />
                                        <Typography className={classes.genshinFont} variant="h5">C6 - {constellation.c6.name}</Typography>
                                    </div>
                                    <br />
                                    {parse(constellation.c6.description)}
                                </div>
                            </TabPanelHorizontal>
                            <TabPanelHorizontal value={valueHorizontal} index={2}>
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
                            </TabPanelHorizontal>
                            <TabPanelHorizontal value={valueHorizontal} index={3}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} size="small">
                                        <TableHead>
                                            <StyledTableAlternatingRows>
                                                <StyledTableCell className={classes.genshinFont} align="center">Phase</StyledTableCell>
                                                <StyledTableCell className={classes.genshinFont} align="center">Level</StyledTableCell>
                                                <StyledTableCell className={classes.genshinFont} align="center">Ascension Materials</StyledTableCell>
                                            </StyledTableAlternatingRows>
                                        </TableHead>
                                        <TableBody>
                                            {characterAscStatRows.map((row) => (
                                                <StyledTableAlternatingRows key={row.ascLevel}>
                                                    <StyledTableCell component="th" scope="row" align="center">
                                                        {row.phase}
                                                    </StyledTableCell>
                                                    <StyledTableCell component="th" scope="row" align="center">
                                                        {row.ascLevel}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        {row.ascLevel !== "1-20" ?
                                                            <React.Fragment>
                                                                <MaterialTooltip title={formatGemstone(`${element}_${ascensionLegend.gemstone[row.ascLevel]}`)} arrow placement="top">
                                                                    <img style={materialImage} src={require(`../assets/materials/ascension_gems/${element}_${ascensionLegend.gemstone[row.ascLevel]}.png`).default} alt={element} />
                                                                </MaterialTooltip>
                                                                {row.quantity[0]}
                                                                {row.quantity[1] !== "0" &&
                                                                    <React.Fragment>
                                                                        <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                                                                            <img style={materialImage} src={require(`../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                                                                        </MaterialTooltip>
                                                                        {row.quantity[1]}
                                                                    </React.Fragment>
                                                                }
                                                                <MaterialTooltip title={localMat} arrow placement="top">
                                                                    <img style={materialImage} src={require(`../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                                                                </MaterialTooltip>
                                                                {row.quantity[2]}
                                                                <MaterialTooltip title={formatCommonMats(`${commonMat}${ascensionLegend.commonMat[row.ascLevel]}`)} arrow placement="top">
                                                                    <img style={materialImage} src={require(`../assets/materials/common_mats/${commonMat.split(" ").join("_")}${ascensionLegend.commonMat[row.ascLevel]}.png`).default} alt={commonMat} />
                                                                </MaterialTooltip>
                                                                {row.quantity[3]}
                                                            </React.Fragment> : <Typography>———</Typography>}

                                                    </StyledTableCell>
                                                </StyledTableAlternatingRows>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
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
                    <img className={classes.nationIcon} src={require(`../assets/nations/${nation}.png`).default} alt={nation} />
                </div>
            </DialogContent>
        </React.Fragment >
    )
}

export default CharacterPopup;