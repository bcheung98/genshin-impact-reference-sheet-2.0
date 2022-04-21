import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';

let freedomIcon = require("../../assets/materials/talent_mats/Freedom.png").default;
let resistanceIcon = require("../../assets/materials/talent_mats/Resistance.png").default;
let balladIcon = require("../../assets/materials/talent_mats/Ballad.png").default;
let prosperityIcon = require("../../assets/materials/talent_mats/Prosperity.png").default;
let diligenceIcon = require("../../assets/materials/talent_mats/Diligence.png").default;
let goldIcon = require("../../assets/materials/talent_mats/Gold.png").default;
let transienceIcon = require("../../assets/materials/talent_mats/Transience.png").default;
let eleganceIcon = require("../../assets/materials/talent_mats/Elegance.png").default;
let lightIcon = require("../../assets/materials/talent_mats/Light.png").default;

const useStyles = makeStyles((theme) => ({
    filter: {
        display: "flex",
    },
    text: {
        fontFamily: "Genshin, sans-serif",
        marginTop: "12px",
        marginLeft: "5px",
    },
}));

const TalentFilter = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.filter}>
                <img className="filter-off" id="freedom-button" src={freedomIcon} alt="Freedom" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Freedom (Mon/Thu)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="resistance-button" src={resistanceIcon} alt="Resistance" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Resistance (Tue/Fri)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="ballad-button" src={balladIcon} alt="Ballad" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Ballad(Wed/Sat)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="prosperity-button" src={prosperityIcon} alt="Prosperity" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Prosperity (Mon/Thu)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="diligence-button" src={diligenceIcon} alt="Diligence" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Diligence (Tue/Fri)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="gold-button" src={goldIcon} alt="Gold" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Gold (Wed/Sat)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="transience-button" src={transienceIcon} alt="Transience" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Transience (Mon/Thu)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="elegance-button" src={eleganceIcon} alt="Elegance" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Elegance (Tue/Fri)</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="light-button" src={lightIcon} alt="Light" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Light (Wed/Fri)</Typography>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_TALENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TalentFilter);