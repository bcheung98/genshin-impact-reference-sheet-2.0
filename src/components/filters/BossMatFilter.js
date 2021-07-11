import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";

let clawIcon = require("../../assets/materials/boss_mats/Dvalin's_Claw.png").default;
let plumeIcon = require("../../assets/materials/boss_mats/Dvalin's_Plume.png").default;
let sighIcon = require("../../assets/materials/boss_mats/Dvalin's_Sigh.png").default;
let ringIcon = require("../../assets/materials/boss_mats/Ring_of_Boreas.png").default;
let locketIcon = require("../../assets/materials/boss_mats/Spirit_Locket_of_Boreas.png").default;
let tailIcon = require("../../assets/materials/boss_mats/Tail_of_Boreas.png").default;
let shadowIcon = require("../../assets/materials/boss_mats/Shadow_of_the_Warrior.png").default;
let shardIcon = require("../../assets/materials/boss_mats/Shard_of_a_Foul_Legacy.png").default;
let tuskIcon = require("../../assets/materials/boss_mats/Tusk_of_Monoceros_Caeli.png").default;
let branchIcon = require("../../assets/materials/boss_mats/Bloodjade_Branch.png").default;
let crownIcon = require("../../assets/materials/boss_mats/Dragon_Lord's_Crown.png").default;
let scaleIcon = require("../../assets/materials/boss_mats/Gilded_Scale.png").default;

const BossMatFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="Dvalin's Claw" arrow placement="top">
                <img className="filter-off" id="dvalin's claw-button" src={clawIcon} alt="Dvalin's Claw" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Dvalin's Plume" arrow placement="top">
                <img className="filter-off" id="dvalin's plume-button" src={plumeIcon} alt="Dvalin's Plume" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Dvalin's Sigh" arrow placement="top">
                <img className="filter-off" id="dvalin's sigh-button" src={sighIcon} alt="Dvalin's Sigh" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Ring of Boreas" arrow placement="top">
                <img className="filter-off" id="ring of boreas-button" src={ringIcon} alt="Ring of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Spirit Locket of Boreas" arrow placement="top">
                <img className="filter-off" id="spirit locket of boreas-button" src={locketIcon} alt="Spirit Locket of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Tail of Boreas" arrow placement="top">
                <img className="filter-off" id="tail of boreas-button" src={tailIcon} alt="Tail of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Shadow of the Warrior" arrow placement="top">
                <img className="filter-off" id="shadow of the warrior-button" src={shadowIcon} alt="Shadow of the Warrior" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Shard of a Foul Legacy" arrow placement="top">
                <img className="filter-off" id="shard of a foul legacy-button" src={shardIcon} alt="Shard of a Foul Legacy" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Tusk of Monoceros Caeli" arrow placement="top">
                <img className="filter-off" id="tusk of monoceros caeli-button" src={tuskIcon} alt="Tusk of Monoceros Caeli" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Bloodjade Branch" arrow placement="top">
                <img className="filter-off" id="bloodjade branch-button" src={branchIcon} alt="Bloodjade Branch" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Dragon Lord's Crown" arrow placement="top">
                <img className="filter-off" id="dragon lord's crown-button" src={crownIcon} alt="Dragon Lord's Crown" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Gilded Scale" arrow placement="top">
                <img className="filter-off" id="gilded scale-button" src={scaleIcon} alt="Gilded Scale" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_BOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);