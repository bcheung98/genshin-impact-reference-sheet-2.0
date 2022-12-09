import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../helpers/FilterTooltip";
import { formatBossMats } from "../../helpers/TooltipText";

let basaltPillarIcon = require("../../assets/materials/boss_mats/Basalt_Pillar.png").default;
let cleansingHeartIcon = require("../../assets/materials/boss_mats/Cleansing_Heart.png").default;
let crystallineBloomIcon = require("../../assets/materials/boss_mats/Crystalline_Bloom.png").default;
let dewIcon = require("../../assets/materials/boss_mats/Dew_of_Repudiation.png").default;
let dragonheirIcon = require("../../assets/materials/boss_mats/Dragonheir's_False_Fin.png").default;
let everflameSeedIcon = require("../../assets/materials/boss_mats/Everflame_Seed.png").default;
let hoarfrostCoreIcon = require("../../assets/materials/boss_mats/Hoarfrost_Core.png").default;
let hurricaneSeedIcon = require("../../assets/materials/boss_mats/Hurricane_Seed.png").default;
let juvenileJadeIcon = require("../../assets/materials/boss_mats/Juvenile_Jade.png").default;
let lightningPrismIcon = require("../../assets/materials/boss_mats/Lightning_Prism.png").default;
let lgtIcon = require("../../assets/materials/boss_mats/Light_Guiding_Tetrahedron.png").default;
let majesticBeakIcon = require("../../assets/materials/boss_mats/Majestic_Hooked_Beak.png").default;
let marionetteCoreIcon = require("../../assets/materials/boss_mats/Marionette_Core.png").default;
let perpetualCaliberIcon = require("../../assets/materials/boss_mats/Perpetual_Caliber.png").default;
let perpetualHeartIcon = require("../../assets/materials/boss_mats/Perpetual_Heart.png").default;
let quelledCreeperIcon = require("../../assets/materials/boss_mats/Quelled_Creeper.png").default;
let riftbornRegaliaIcon = require("../../assets/materials/boss_mats/Riftborn_Regalia.png").default;
let runicFangIcon = require("../../assets/materials/boss_mats/Runic_Fang.png").default;
let smolderingPearlIcon = require("../../assets/materials/boss_mats/Smoldering_Pearl.png").default;
let stormBeadIcon = require("../../assets/materials/boss_mats/Storm_Beads.png").default;
let thunderclapCoreIcon = require("../../assets/materials/boss_mats/Thunderclap_Fruitcore.png").default;

const BossMatFilter = (props) => {
    return (
        <div>
            <FilterTooltip title={formatBossMats("Basalt Pillar")} arrow placement="top">
                <img className="filter-off" id="basalt pillar-button" src={basaltPillarIcon} alt="Basalt Pillar" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Cleansing Heart")} arrow placement="top">
                <img className="filter-off" id="cleansing heart-button" src={cleansingHeartIcon} alt="Cleansing Heart" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Crystalline Bloom")} arrow placement="top">
                <img className="filter-off" id="crystalline bloom-button" src={crystallineBloomIcon} alt="Crystalline Bloom" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Dew of Repudiation")} arrow placement="top">
                <img className="filter-off" id="dew of repudiation-button" src={dewIcon} alt="Dew of Repudiation" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Dragonheir's False Fin")} arrow placement="top">
                <img className="filter-off" id="dragonheir's false fin-button" src={dragonheirIcon} alt="Dragonheir's False Fin" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Everflame Seed")} arrow placement="top">
                <img className="filter-off" id="everflame seed-button" src={everflameSeedIcon} alt="Everflame Seed" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Hoarfrost Core")} arrow placement="top">
                <img className="filter-off" id="hoarfrost core-button" src={hoarfrostCoreIcon} alt="Hoarfrost Core" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Hurricane Seed")} arrow placement="top">
                <img className="filter-off" id="hurricane seed-button" src={hurricaneSeedIcon} alt="Hurricane Seed" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Juvenile Jade")} arrow placement="top">
                <img className="filter-off" id="juvenile jade-button" src={juvenileJadeIcon} alt="Juvenile Jade" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Majestic Hooked Beak")} arrow placement="top">
                <img className="filter-off" id="majestic hooked beak-button" src={majesticBeakIcon} alt="Majestic Hooked Beak" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Lightning Prism")} arrow placement="top">
                <img className="filter-off" id="lightning prism-button" src={lightningPrismIcon} alt="Lightning Prism" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Light Guiding Tetrahedron")} arrow placement="top">
                <img className="filter-off" id="light guiding tetrahedron-button" src={lgtIcon} alt="Light Guiding Tetrahedron" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Marionette Core")} arrow placement="top">
                <img className="filter-off" id="marionette core-button" src={marionetteCoreIcon} alt="Marionette Core" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Perpetual Caliber")} arrow placement="top">
                <img className="filter-off" id="perpetual caliber-button" src={perpetualCaliberIcon} alt="Perpetual Caliber" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Perpetual Heart")} arrow placement="top">
                <img className="filter-off" id="perpetual heart-button" src={perpetualHeartIcon} alt="Perpetual Heart" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Quelled Creeper")} arrow placement="top">
                <img className="filter-off" id="quelled creeper-button" src={quelledCreeperIcon} alt="Quelled Creeper" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Riftborn Regalia")} arrow placement="top">
                <img className="filter-off" id="riftborn regalia-button" src={riftbornRegaliaIcon} alt="Riftborn Regalia" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Runic Fang")} arrow placement="top">
                <img className="filter-off" id="runic fang-button" src={runicFangIcon} alt="Runic Fang" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Smoldering Pearl")} arrow placement="top">
                <img className="filter-off" id="smoldering pearl-button" src={smolderingPearlIcon} alt="Smoldering Pearl" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Storm Beads")} arrow placement="top">
                <img className="filter-off" id="storm beads-button" src={stormBeadIcon} alt="Storm Beads" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatBossMats("Thunderclap Fruitcore")} arrow placement="top">
                <img className="filter-off" id="thunderclap fruitcore-button" src={thunderclapCoreIcon} alt="Thunderclap Fruitcore" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_BOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);