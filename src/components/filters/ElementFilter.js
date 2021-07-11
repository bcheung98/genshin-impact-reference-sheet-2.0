import React from "react";
import { FilterTooltip } from "../../helpers/FilterTooltip";

let pyroIcon = require("../../assets/elements/Element_Pyro.png").default;
let hydroIcon = require("../../assets/elements/Element_Hydro.png").default;
let electroIcon = require("../../assets/elements/Element_Electro.png").default;
let cryoIcon = require("../../assets/elements/Element_Cryo.png").default;
let anemoIcon = require("../../assets/elements/Element_Anemo.png").default;
let geoIcon = require("../../assets/elements/Element_Geo.png").default;

const ElementFilter = () => {
    return (
        <React.Fragment>
            <FilterTooltip title="Pyro" arrow placement="top">
                <img className="filter-off" id="pyro-button" src={pyroIcon} alt="Pyro" />
            </FilterTooltip>
            <FilterTooltip title="Hydro" arrow placement="top">
                <img className="filter-off" id="hydro-button" src={hydroIcon} alt="Hydro" />
            </FilterTooltip>
            <FilterTooltip title="Electro" arrow placement="top">
                <img className="filter-off" id="electro-button" src={electroIcon} alt="Electro" />
            </FilterTooltip>
            <FilterTooltip title="Cryo" arrow placement="top">
                <img className="filter-off" id="cryo-button" src={cryoIcon} alt="Cryo" />
            </FilterTooltip>
            <FilterTooltip title="Anemo" arrow placement="top">
                <img className="filter-off" id="anemo-button" src={anemoIcon} alt="Anemo" />
            </FilterTooltip>
            <FilterTooltip title="Geo" arrow placement="top">
                <img className="filter-off" id="geo-button" src={geoIcon} alt="Geo" />
            </FilterTooltip>
        </React.Fragment>
    )
}

export default ElementFilter;
