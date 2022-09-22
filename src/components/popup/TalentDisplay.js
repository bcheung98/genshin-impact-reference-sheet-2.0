import React from "react";
import parse from "html-react-parser";
import PropTypes from 'prop-types';
import { makeStyles, Typography, Tabs, Tab, Box, Paper, Avatar, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TalentScalingTable from "./TalentScalingTable";
import { FormatTalentKey } from "../../helpers/FormatTalentKey";

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif"
    },
    splashText: {
        fontSize: "11.5pt",
        color: "rgb(225, 225, 225)",
    },
    talentDisplay: {
        flexGrow: 1,
        display: 'flex',
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
    verticalTabSelector: {
        fontFamily: "Genshin, sans-serif",
        textTransform: "none",
        borderBottom: "2px solid gray",
        borderRight: "2px solid gray",
        minHeight: "50px",
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
    summary: {
        marginBottom: "-5px",
        textAlign: "center",
        fontFamily: "Genshin, sans-serif",
    },
}));

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

const TalentDisplay = (props) => {
    const classes = useStyles();
    let { name, element, weapon, talents } = props.character;

    const [valueVerticalTalent, setValueVerticalTalent] = React.useState(0);
    const handleChangeVerticalTalent = (event, newValue) => {
        setValueVerticalTalent(newValue);
    };

    return (
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
                                key === "attack" ? <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../../assets/characters/talents/attack_${weapon.toLowerCase()}.png`).default} className={classes.avatar} /> : <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../../assets/characters/talents/${name.split(" ").join("_").toLowerCase()}_${key}.png`).default} className={classes.avatar} />
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
    )
}

export default TalentDisplay;