import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";
import { formatTalents } from "../../helpers/formatTalents";

let freedomIcon = require("../../assets/materials/talent_mats/Freedom.png").default;
let resistanceIcon = require("../../assets/materials/talent_mats/Resistance.png").default;
let balladIcon = require("../../assets/materials/talent_mats/Ballad.png").default;
let prosperityIcon = require("../../assets/materials/talent_mats/Prosperity.png").default;
let diligenceIcon = require("../../assets/materials/talent_mats/Diligence.png").default;
let goldIcon = require("../../assets/materials/talent_mats/Gold.png").default;

const TalentFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title={formatTalents("Freedom")} arrow placement="top">
                <img className="filter-off" id="freedom-button" src={freedomIcon} alt="Freedom" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatTalents("Resistance")} arrow placement="top">
                <img className="filter-off" id="resistance-button" src={resistanceIcon} alt="Resistance" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatTalents("Ballad")} arrow placement="top">
                <img className="filter-off" id="ballad-button" src={balladIcon} alt="Ballad" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatTalents("Prosperity")} arrow placement="top">
                <img className="filter-off" id="prosperity-button" src={prosperityIcon} alt="Prosperity" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatTalents("Diligence")} arrow placement="top">
                <img className="filter-off" id="diligence-button" src={diligenceIcon} alt="Diligence" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatTalents("Gold")} arrow placement="top">
                <img className="filter-off" id="gold-button" src={goldIcon} alt="Gold" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_TALENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TalentFilter);