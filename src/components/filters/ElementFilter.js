import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';

let pyroIcon = require("../../assets/elements/Element_Pyro.png").default;
let hydroIcon = require("../../assets/elements/Element_Hydro.png").default;
let electroIcon = require("../../assets/elements/Element_Electro.png").default;
let cryoIcon = require("../../assets/elements/Element_Cryo.png").default;
let anemoIcon = require("../../assets/elements/Element_Anemo.png").default;
let geoIcon = require("../../assets/elements/Element_Geo.png").default;

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

const ElementFilter = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.filter}>
                <img className="filter-off" id="pyro-button" src={pyroIcon} alt="Pyro" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Pyro</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="hydro-button" src={hydroIcon} alt="Hydro" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Hydro</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="electro-button" src={electroIcon} alt="Electro" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Electro</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="cryo-button" src={cryoIcon} alt="Cryo" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Cryo</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="anemo-button" src={anemoIcon} alt="Anemo" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Anemo</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="geo-button" src={geoIcon} alt="Geo" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Geo</Typography>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_ELEMENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(ElementFilter);
