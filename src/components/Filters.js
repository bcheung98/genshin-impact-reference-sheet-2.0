import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "../css/filters.css";
import ElementFilter from "./filters/ElementFilter";
import WeaponFilter from "./filters/WeaponFilter";
import RarityFilter from "./filters/RarityFilter";
import TalentFilter from "./filters/TalentFilter";
import BossMatFilter from "./filters/BossMatFilter";
import NationFilter from "./filters/NationFilter";
import LocalSpecialtyFilter from "./filters/LocalSpecialtyFilter";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        width: "80%",
        marginTop: "10px",
        marginLeft: "30px",
    },
    rootSummary: {
        margin: "10px",
        textAlign: "center",
        fontFamily: "Genshin, sans-serif",
    },
    summary: {
        marginBottom: "-5px",
        textAlign: "center",
        fontFamily: "Genshin, sans-serif",
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
    subFilters: {
        fontFamily: "Genshin, sans-serif",
    },
    filterRow: {
        margin: "5px",
        padding: 0
    },
}));

const Filters = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.bar}>
                <Typography variant="h5" className={classes.rootSummary}>Filters</Typography>

                <Accordion className={classes.subBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Element</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.filterRow}>
                        <ElementFilter />
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.subBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Weapon</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.filterRow}>
                        <WeaponFilter />
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.subBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Rarity</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.filterRow}>
                        <RarityFilter />
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.subBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Talent Book</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.filterRow}>
                        <TalentFilter />
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.subBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Weekly Boss</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.filterRow}>
                        <BossMatFilter />
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.subBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Local Specialty</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.filterRow}>
                        <LocalSpecialtyFilter />
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.subBar}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Nation</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.filterRow}>
                        <NationFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </div>
    )
}

export default Filters;