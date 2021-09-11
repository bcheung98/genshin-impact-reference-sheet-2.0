import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";

const RarityFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="5 Star" arrow placement="top">
                <img className="filter-off" id="5-button" src={require("../../assets/stars/Icon_5_Stars.png").default} alt="5" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="4 Star" arrow placement="top">
                <img className="filter-off" id="4-button" src={require("../../assets/stars/Icon_4_Stars.png").default} alt="4" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_RARITY_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(RarityFilter);