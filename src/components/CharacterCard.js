import React from "react";
import parse from "html-react-parser";
import { formatTalents, formatCommonMats, formatBossMats, formatAscensionMats, formatGemstone } from "../helpers/TooltipText";
import { FormatTalentKey } from "../helpers/FormatTalentKey";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import "../css/characterCard.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 325,
        height: 200,
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "rgb(32, 32, 32)",
        border: "2px solid gray",
        borderRadius: "5px",
        fontFamily: "Genshin, sans-serif",
    },
    genshinFont: {
        fontFamily: "Genshin, sans-serif"
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
    },
    weaponIcon: {
        height: "35px",
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
    },
    moreInfoButton: {
        marginTop: "-10px",
        marginLeft: "-1px",
        color: "rgb(10, 155, 201)"
    },
    divider: {
        backgroundColor: "gray",
    },
    dialogRoot: {
        margin: "auto",
        maxWidth: "80vw",
    },
    dialogGrid: {
        flexGrow: 1,
    },
    dialogCircleIcon: {
        marginLeft: "-7px",
    },
    dialogTitleMiddleColumn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    dialogTitleRightColumn: {
        textAlign: "center",
    },
    dialogStars: {
        height: "25px",
        marginLeft: "-5px",
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
        width: "975px",
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
        backgroundColor: "rgb(32, 32, 32)",
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
        border: "2px solid gray"
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
    head: {
        backgroundColor: "rgb(20, 20, 20)",
        color: "white",
    },
    body: {
        color: "white",
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: "rgb(20, 20, 20)",
        },
        '&:hover': {
            backgroundColor: "rgb(60, 60, 60)",
        },
    },
}))(TableRow);

const createData = (level, hp, atk, def, special) => {
    return { level, hp, atk, def, special }
}

const CharacterCard = (props) => {
    const classes = useStyles();
    let { name, title, rarity, element, weapon, talents, constellation, stats, description, birthday, nation, voiceActors } = props.character;
    let { talentBook, ascensionMat, localMat, commonMat, bossMat } = props.character.materials;

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [valueHorizontal, setValueHorizontal] = React.useState(0);
    const handleChangeHorizontal = (event, newValue) => {
        setValueHorizontal(newValue);
    };

    const [valueVerticalTalent, setValueVerticalTalent] = React.useState(0);
    const handleChangeVerticalTalent = (event, newValue) => {
        setValueVerticalTalent(newValue);
    };

    const levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"]

    const rows = levels.map((level, index) => createData(level, stats.hp[index], stats.atk[index], stats.def[index], stats.special[index]))

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
                            <img className={classes.characterIcon} src={require(`../assets/characters/icons/Character_${name.split(" ").join("_")}_Icon.png`).default} alt={name} />
                            <img className={classes.stars} src={require(`../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                        </Grid>
                        <Grid item xs={12} sm container>
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
                    <DialogTitle>
                        <div className={classes.dialogGrid}>
                            <Grid container spacing={3}>
                                <Grid item xs className={classes.dialogTitleLeftColumn}>
                                    {props.character.fullname ? <Typography className={classes.genshinFont} variant="h4">{props.character.fullname}</Typography> : <Typography style={{ fontFamily: "Genshin" }} variant="h4">{name}</Typography>}
                                    <Typography variant="body1" className={classes.genshinFont}><i>{title}</i></Typography>
                                    <img className={classes.dialogStars} src={require(`../assets/stars/Icon_${rarity}_Stars.png`).default} alt={rarity} />
                                    <div className={classes.dialogCircleIcon}>
                                        <MaterialTooltip title={element} arrow placement="top">
                                            <img src={require(`../assets/elements/Element_${element}.png`).default} alt={element} />
                                        </MaterialTooltip>
                                        <MaterialTooltip title={weapon} arrow placement="top">
                                            <img src={require(`../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`).default} alt={weapon} />
                                        </MaterialTooltip>
                                    </div>
                                </Grid>
                                <Grid item xs className={classes.dialogTitleMiddleColumn}>
                                    <Grid className={classes.dialogMaterialRow}>
                                        <MaterialTooltip title={formatGemstone(element)} arrow placement="top">
                                            <img className={classes.materialImage} src={require(`../assets/materials/ascension_gems/${element}_Gemstone.png`).default} alt={element} />
                                        </MaterialTooltip>
                                        <MaterialTooltip title={formatAscensionMats(ascensionMat)} arrow placement="top">
                                            <img className={classes.materialImage} src={require(`../assets/materials/ascension_mats/${ascensionMat.split(" ").join("_")}.png`).default} alt={ascensionMat} />
                                        </MaterialTooltip>
                                        <MaterialTooltip title={localMat} arrow placement="top">
                                            <img className={classes.materialImage} src={require(`../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                                        </MaterialTooltip>
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
                    <Divider className={classes.divider} />
                    <DialogContent>
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
                                                        <div className={classes.avatarHeader}>
                                                            <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../assets/characters/talents/${name.split(" ").join("_").toLowerCase()}_${key}.png`).default} className={classes.avatar} />
                                                            <Typography className={classes.genshinFont} variant="h5" component="p">{FormatTalentKey(key)}</Typography>
                                                        </div>
                                                        <br />
                                                        {parse(talents[key].description)}
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
                                                    <StyledTableRow>
                                                        <StyledTableCell className={classes.genshinFont} align="center">Level</StyledTableCell>
                                                        <StyledTableCell className={classes.genshinFont} align="center">Base HP</StyledTableCell>
                                                        <StyledTableCell className={classes.genshinFont} align="center">Base ATK</StyledTableCell>
                                                        <StyledTableCell className={classes.genshinFont} align="center">Base DEF</StyledTableCell>
                                                        <StyledTableCell className={classes.genshinFont} align="center">{stats.ascensionStat}</StyledTableCell>
                                                    </StyledTableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <StyledTableRow key={row.level}>
                                                            <StyledTableCell component="th" scope="row" align="center">
                                                                {row.level}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">{Number(row.hp).toLocaleString()}</StyledTableCell>
                                                            <StyledTableCell align="center">{row.atk}</StyledTableCell>
                                                            <StyledTableCell align="center">{row.def}</StyledTableCell>
                                                            <StyledTableCell align="center">{stats.ascensionStat !== "Elemental Mastery" ? row.special + "%" : row.special}</StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </TabPanelHorizontal>
                                </div>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <Divider className={classes.divider} />
                    <DialogContent>
                        <div className={classes.dialogDescription}>
                            <Typography variant="subtitle2" className={classes.genshinFont}><i>{description}</i></Typography>
                        </div>
                        <div className={classes.nationIconContainer}>
                            {nation && <img className={classes.nationIcon} src={require(`../assets/nations/${nation}.png`).default} alt={nation} />}
                        </div>
                    </DialogContent>
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