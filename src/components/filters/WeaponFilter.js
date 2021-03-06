import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";

let swordIcon = require("../../assets/weapons/Weapon-class-sword-icon.png").default;
let claymoreIcon = require("../../assets/weapons/Weapon-class-claymore-icon.png").default;
let polearmIcon = require("../../assets/weapons/Weapon-class-polearm-icon.png").default;
let bowIcon = require("../../assets/weapons/Weapon-class-bow-icon.png").default;
let catalystIcon = require("../../assets/weapons/Weapon-class-catalyst-icon.png").default;

const WeaponFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="Sword" arrow placement="top">
                <img className="filter-off" id="sword-button" src={swordIcon} alt="Sword" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Claymore" arrow placement="top">
                <img className="filter-off" id="claymore-button" src={claymoreIcon} alt="Claymore" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Polearm" arrow placement="top">
                <img className="filter-off" id="polearm-button" src={polearmIcon} alt="Polearm" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Bow" arrow placement="top">
                <img className="filter-off" id="bow-button" src={bowIcon} alt="Bow" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Catalyst" arrow placement="top">
                <img className="filter-off" id="catalyst-button" src={catalystIcon} alt="Catalyst" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_WEAPON_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponFilter);
