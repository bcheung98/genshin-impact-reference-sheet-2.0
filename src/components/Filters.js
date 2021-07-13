import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import "../css/filters.css";
import ElementFilter from "./filters/ElementFilter";
import WeaponFilter from "./filters/WeaponFilter";
import TalentFilter from "./filters/TalentFilter";
import BossMatFilter from "./filters/BossMatFilter";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        width: "70%",
        marginBottom: "15px"
    },
    bar: {
        color: "white",
        backgroundColor: "rgb(32, 32, 32)",
        border: "2px solid gray",
    },
    filterRow: {
        margin: "5px",
        padding: 0
    },
    divider: {
        backgroundColor: "gray"
    }
}));

const Filters = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion className={classes.bar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
                    <Typography variant="h6">Filters</Typography>
                </AccordionSummary>
                <Divider className={classes.divider} />
                <AccordionDetails className={classes.filterRow}>
                    <ElementFilter />
                </AccordionDetails>
                <Divider className={classes.divider} />
                <AccordionDetails className={classes.filterRow}>
                    <WeaponFilter />
                </AccordionDetails>
                <Divider className={classes.divider} />
                <AccordionDetails className={classes.filterRow}>
                    <TalentFilter />
                </AccordionDetails>
                <Divider className={classes.divider} />
                <AccordionDetails className={classes.filterRow}>
                    <BossMatFilter />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Filters;