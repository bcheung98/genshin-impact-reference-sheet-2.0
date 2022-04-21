import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    filter: {
        display: "flex",
    },
}));

const RarityFilter = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.filter}>
                <img className="filter-off" id="5-button" src={require("../../assets/stars/Icon_5_Stars.png").default} alt="5" onClick={(e) => props.setFilter(e.target.alt)} />
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="4-button" src={require("../../assets/stars/Icon_4_Stars.png").default} alt="4" onClick={(e) => props.setFilter(e.target.alt)} />
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_RARITY_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(RarityFilter);