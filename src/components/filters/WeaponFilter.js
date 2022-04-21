import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';

let swordIcon = require("../../assets/weapons/Weapon-class-sword-icon.png").default;
let claymoreIcon = require("../../assets/weapons/Weapon-class-claymore-icon.png").default;
let polearmIcon = require("../../assets/weapons/Weapon-class-polearm-icon.png").default;
let bowIcon = require("../../assets/weapons/Weapon-class-bow-icon.png").default;
let catalystIcon = require("../../assets/weapons/Weapon-class-catalyst-icon.png").default;

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

const WeaponFilter = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.filter}>
                <img className="filter-off" id="sword-button" src={swordIcon} alt="Sword" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Sword</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="claymore-button" src={claymoreIcon} alt="Claymore" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Claymore</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="polearm-button" src={polearmIcon} alt="Polearm" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Polearm</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="bow-button" src={bowIcon} alt="Bow" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Bow</Typography>
            </div>
            <div className={classes.filter}>
                <img className="filter-off" id="catalyst-button" src={catalystIcon} alt="Catalyst" onClick={(e) => props.setFilter(e.target.alt)} />
                <Typography variant="body1" className={classes.text}>Catalyst</Typography>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_WEAPON_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponFilter);
