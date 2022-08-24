import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";

let pyroIcon = require("../../assets/elements/Element_Pyro.png").default;
let hydroIcon = require("../../assets/elements/Element_Hydro.png").default;
let electroIcon = require("../../assets/elements/Element_Electro.png").default;
let cryoIcon = require("../../assets/elements/Element_Cryo.png").default;
let anemoIcon = require("../../assets/elements/Element_Anemo.png").default;
let geoIcon = require("../../assets/elements/Element_Geo.png").default;
let dendroIcon = require("../../assets/elements/Element_Dendro.png").default;

const ElementFilter = (props) => {
    return (
        <div>
            <FilterTooltip title="Pyro" arrow placement="top">
                <img className="filter-off" id="pyro-button" src={pyroIcon} alt="Pyro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Hydro" arrow placement="top">
                <img className="filter-off" id="hydro-button" src={hydroIcon} alt="Hydro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Electro" arrow placement="top">
                <img className="filter-off" id="electro-button" src={electroIcon} alt="Electro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Cryo" arrow placement="top">
                <img className="filter-off" id="cryo-button" src={cryoIcon} alt="Cryo" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Anemo" arrow placement="top">
                <img className="filter-off" id="anemo-button" src={anemoIcon} alt="Anemo" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Geo" arrow placement="top">
                <img className="filter-off" id="geo-button" src={geoIcon} alt="Geo" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Dendro" arrow placement="top">
                <img className="filter-off" id="dendro-button" src={dendroIcon} alt="Dendro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_ELEMENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(ElementFilter);
