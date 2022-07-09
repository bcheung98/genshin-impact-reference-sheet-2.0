import React from "react";
import { formatTalents, formatCommonMats, formatBossMats, formatWeeklyBossMats, formatGemstone } from "../helpers/TooltipText";
import { MaterialTooltip } from "../helpers/MaterialTooltip";
import Grid from '@material-ui/core/Grid';

const CharacterMaterialGrid = (props) => {
    let { element } = props.character;
    let { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = props.character.materials;
    
    const materialRow = {
        marginLeft: props.margin
    }

    const materialImage = {
        height: props.imageSize,
        border: "2px solid gray",
        borderRadius: "5px",
        margin: "5px",
        backgroundColor: "rgb(36, 41, 56)",
    }

    return (
        <Grid item sm>
            <Grid style={materialRow}>
                <MaterialTooltip title={formatTalents(talentBook)} arrow placement="top">
                    <img style={materialImage} src={require(`../assets/materials/talent_mats/${talentBook}.png`).default} alt={talentBook} />
                </MaterialTooltip>
                <MaterialTooltip title={formatCommonMats(commonMat)} arrow placement="top">
                    <img style={materialImage} src={require(`../assets/materials/common_mats/${commonMat.split(" ").join("_")}.png`).default} alt={commonMat} />
                </MaterialTooltip>
                <MaterialTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                    <img style={materialImage} src={require(`../assets/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`).default} alt={weeklyBossMat} />
                </MaterialTooltip>
            </Grid>
            <Grid style={materialRow}>
                <MaterialTooltip title={formatGemstone(element)} arrow placement="top">
                    <img style={materialImage} src={require(`../assets/materials/ascension_gems/${element}_Gemstone.png`).default} alt={element} />
                </MaterialTooltip>
                <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                    <img style={materialImage} src={require(`../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                </MaterialTooltip>
                <MaterialTooltip title={localMat} arrow placement="top">
                    <img style={materialImage} src={require(`../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                </MaterialTooltip>
            </Grid>
        </Grid>
    )
}

export default CharacterMaterialGrid;