import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';

let mondstadtIcon = require("../../assets/nations/Mondstadt.png").default;
let liyueIcon = require("../../assets/nations/Liyue.png").default;
let inazumaIcon = require("../../assets/nations/Inazuma.png").default;

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

const NationFilter = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.filter}>
                <img className="filter-off" id="mondstadt-button" src={mondstadtIcon} alt="Mondstadt" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Mondstadt</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="liyue-button" src={liyueIcon} alt="Liyue" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Liyue</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="inazuma-button" src={inazumaIcon} alt="Inazuma" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Inazuma</Typography>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_NATION_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(NationFilter);