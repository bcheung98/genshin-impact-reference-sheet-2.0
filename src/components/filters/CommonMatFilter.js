import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";
import { formatBossMats } from "../../helpers/TooltipText";

let arrowIcon = require("../../assets/materials/common_mats/Arrow.png").default;
let fatuiIcon = require("../../assets/materials/common_mats/Fatui_Insignia.png").default;
let handguardIcon = require("../../assets/materials/common_mats/Handguard.png").default;
let maskIcon = require("../../assets/materials/common_mats/Mask.png").default;
let nectarIcon = require("../../assets/materials/common_mats/Nectar.png").default;
let scrollIcon = require("../../assets/materials/common_mats/Scroll.png").default;
let slimeIcon = require("../../assets/materials/common_mats/Slime.png").default;
let specterIcon = require("../../assets/materials/common_mats/Specter.png").default;
let thIcon = require("../../assets/materials/common_mats/Treasure_Hoarder_Insignia.png").default;

const CommonMatFilter = (props) => {
    return (
        <div>
            <FilterTooltip title={formatBossMats("Arrow")} arrow placement="top">
                <img className="filter-off" id="arrow-button" src={arrowIcon} alt="Arrow" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Fatui Insignia")} arrow placement="top">
                <img className="filter-off" id="fatui insignia-button" src={fatuiIcon} alt="Fatui Insignia" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Handguard")} arrow placement="top">
                <img className="filter-off" id="handguard-button" src={handguardIcon} alt="Handguard" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Mask")} arrow placement="top">
                <img className="filter-off" id="mask-button" src={maskIcon} alt="Mask" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Nectar")} arrow placement="top">
                <img className="filter-off" id="nectar-button" src={nectarIcon} alt="Nectar" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Scroll")} arrow placement="top">
                <img className="filter-off" id="scroll-button" src={scrollIcon} alt="Scroll" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Slime")} arrow placement="top">
                <img className="filter-off" id="slime-button" src={slimeIcon} alt="Slime" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Specter")} arrow placement="top">
                <img className="filter-off" id="specter-button" src={specterIcon} alt="Specter" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Treasure Hoarder Insignia")} arrow placement="top">
                <img className="filter-off" id="treasure hoarder insignia-button" src={thIcon} alt="Treasure Hoarder Insignia" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_COMMON_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CommonMatFilter);