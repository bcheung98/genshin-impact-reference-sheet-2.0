import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";
import { formatTalents } from "../../helpers/TooltipText";

let freedomIcon = require("../../assets/materials/talent_mats/Freedom.png").default;
let resistanceIcon = require("../../assets/materials/talent_mats/Resistance.png").default;
let balladIcon = require("../../assets/materials/talent_mats/Ballad.png").default;

let prosperityIcon = require("../../assets/materials/talent_mats/Prosperity.png").default;
let diligenceIcon = require("../../assets/materials/talent_mats/Diligence.png").default;
let goldIcon = require("../../assets/materials/talent_mats/Gold.png").default;

let transienceIcon = require("../../assets/materials/talent_mats/Transience.png").default;
let eleganceIcon = require("../../assets/materials/talent_mats/Elegance.png").default;
let lightIcon = require("../../assets/materials/talent_mats/Light.png").default;

let admonitionIcon = require("../../assets/materials/talent_mats/Admonition.png").default;
let ingenuityIcon = require("../../assets/materials/talent_mats/Ingenuity.png").default;
let praxisIcon = require("../../assets/materials/talent_mats/Praxis.png").default;

const TalentFilter = (props) => {
    return (
        <div>
            <div>
                <FilterTooltip title={formatTalents("Freedom")} arrow placement="top">
                    <img className="filter-off" id="freedom-button" src={freedomIcon} alt="Freedom" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Resistance")} arrow placement="top">
                    <img className="filter-off" id="resistance-button" src={resistanceIcon} alt="Resistance" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Ballad")} arrow placement="top">
                    <img className="filter-off" id="ballad-button" src={balladIcon} alt="Ballad" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
            </div>
            <div>
                <FilterTooltip title={formatTalents("Prosperity")} arrow placement="top">
                    <img className="filter-off" id="prosperity-button" src={prosperityIcon} alt="Prosperity" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Diligence")} arrow placement="top">
                    <img className="filter-off" id="diligence-button" src={diligenceIcon} alt="Diligence" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Gold")} arrow placement="top">
                    <img className="filter-off" id="gold-button" src={goldIcon} alt="Gold" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
            </div>
            <div>
                <FilterTooltip title={formatTalents("Transience")} arrow placement="top">
                    <img className="filter-off" id="transience-button" src={transienceIcon} alt="Transience" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Elegance")} arrow placement="top">
                    <img className="filter-off" id="elegance-button" src={eleganceIcon} alt="Elegance" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Light")} arrow placement="top">
                    <img className="filter-off" id="light-button" src={lightIcon} alt="Light" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
            </div>
            <div>
                <FilterTooltip title={formatTalents("Admonition")} arrow placement="top">
                    <img className="filter-off" id="admonition-button" src={admonitionIcon} alt="Admonition" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Ingenuity")} arrow placement="top">
                    <img className="filter-off" id="ingenuity-button" src={ingenuityIcon} alt="Ingenuity" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Praxis")} arrow placement="top">
                    <img className="filter-off" id="praxis-button" src={praxisIcon} alt="Praxis" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
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