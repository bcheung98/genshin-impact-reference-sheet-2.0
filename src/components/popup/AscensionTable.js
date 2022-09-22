import React from "react";
import { makeStyles, Typography, Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import { StyledTableCell, StyledTableAlternatingRows } from "../../helpers/StyledTable";
import { formatCommonMats, formatBossMats, formatGemstone } from "../../helpers/TooltipText";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";
let background1star = require("../../assets/backgrounds/Background_1_Star.png").default;
let background2star = require("../../assets/backgrounds/Background_2_Star.png").default;
let background3star = require("../../assets/backgrounds/Background_3_Star.png").default;
let background4star = require("../../assets/backgrounds/Background_4_Star.png").default;
let background5star = require("../../assets/backgrounds/Background_5_Star.png").default;

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif"
    },
    table: {
        backgroundColor: "rgb(44, 49, 64)",
        border: "2px solid gray",
    },
    materialImageTextContainer: {
        position: "relative",
    },
    materialImage: {
        height: "40px",
        border: "2px solid gray",
        borderRadius: "5px",
        marginLeft: "5px",
        marginRight: "35px",
        backgroundColor: "rgb(36, 41, 56)",
        backgroundSize: "100%",
    },
    materialCount: {
        position: "absolute",
        left: "52px",
    },
    ascensionTableDisplay: {
        overflowY: "auto",
        height: "500px",
    },
}));

const ascensionLegend = {
    gemstone: {
        "20-40": "Sliver",
        "40-50": "Fragment",
        "50-60": "Fragment",
        "60-70": "Chunk",
        "70-80": "Chunk",
        "80-90": "Gemstone"
    },
    commonMat: {
        "20-40": "1",
        "40-50": "1",
        "50-60": "2",
        "60-70": "2",
        "70-80": "3",
        "80-90": "3"
    }
}

const gemstoneBackgroundImageLegend = (level) => {
    switch (level) {
        case "20-40":
            return { backgroundImage: "url(" + background2star + ")" }
        case "40-50":
        case "50-60":
            return { backgroundImage: "url(" + background3star + ")" }
        case "60-70":
        case "70-80":
            return { backgroundImage: "url(" + background4star + ")" }
        case "80-90":
            return { backgroundImage: "url(" + background5star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const commonMatBackgroundImageLegend = (level) => {
    switch (level) {
        case "20-40":
        case "40-50":
            return { backgroundImage: "url(" + background1star + ")" }
        case "50-60":
        case "60-70":
            return { backgroundImage: "url(" + background2star + ")" }
        case "70-80":
        case "80-90":
            return { backgroundImage: "url(" + background3star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const createAscStats = (phase, ascLevel, quantity, total) => {
    return { phase, ascLevel, quantity, total }
}

const AscensionTable = (props) => {
    const classes = useStyles();
    let { element } = props.character;
    let { bossMat, localMat, commonMat } = props.character.materials;

    const ascLevels = ["1-20", "20-40", "40-50", "50-60", "60-70", "70-80", "80-90"]
    const materialQuantity = [["0", "0", "0", "0"], ["1", "0", "3", "3"], ["3", "2", "10", "15"], ["6", "4", "20", "12"], ["3", "8", "30", "18"], ["6", "12", "45", "12"], ["6", "20", "60", "24"]]
    const totalMaterialQuantity = [["0", "0", "0", "0"], ["1", "0", "0", "0", "0", "3", "3", "0", "0"], ["1", "3", "0", "0", "2", "13", "18", "0", "0"], ["1", "9", "0", "0", "6", "33", "18", "12", "0"], ["1", "9", "3", "0", "14", "63", "18", "30", "0"], ["1", "9", "9", "0", "26", "108", "18", "30", "12"], ["1", "9", "9", "6", "46", "168", "18", "30", "36"]]

    const characterAscStatRows = ascLevels.map((level, index) => createAscStats(index, level, materialQuantity[index], totalMaterialQuantity[index]))

    return (
        <div className={classes.ascensionTableDisplay}>
            <TableContainer>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <StyledTableAlternatingRows>
                            <StyledTableCell className={classes.genshinFont} align="center">Phase</StyledTableCell>
                            <StyledTableCell className={classes.genshinFont} align="center">Level</StyledTableCell>
                            <StyledTableCell className={classes.genshinFont} align="center">Ascension Materials</StyledTableCell>
                            <StyledTableCell className={classes.genshinFont} align="center">Total Ascension Materials</StyledTableCell>
                        </StyledTableAlternatingRows>
                    </TableHead>
                    <TableBody>
                        {characterAscStatRows.map((row) => (
                            <StyledTableAlternatingRows key={row.ascLevel}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.phase}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.ascLevel}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="left" style={{ width: "25%" }}>
                                    {row.ascLevel !== "1-20" ?
                                        <React.Fragment>
                                            {row.quantity[1] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background4star + ")", backgroundSize: "100%" }} src={require(`../../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.quantity[1]}</span>
                                                </span>
                                            }
                                            <span className={classes.materialImageTextContainer}>
                                                <MaterialTooltip title={localMat} arrow placement="top">
                                                    <img className={classes.materialImage} style={{ backgroundImage: "url(" + background1star + ")", backgroundSize: "100%" }} src={require(`../../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                                                </MaterialTooltip>
                                                <span className={classes.materialCount}>{row.quantity[2]}</span>
                                            </span>
                                            <span className={classes.materialImageTextContainer}>
                                                <MaterialTooltip title={formatGemstone(`${element}_${ascensionLegend.gemstone[row.ascLevel]}`)} arrow placement="top">
                                                    <img className={classes.materialImage} style={gemstoneBackgroundImageLegend(row.ascLevel)} src={require(`../../assets/materials/ascension_gems/${element}_${ascensionLegend.gemstone[row.ascLevel]}.png`).default} alt={element} />
                                                </MaterialTooltip>
                                                <span className={classes.materialCount}>{row.quantity[0]}</span>
                                            </span>
                                            <span className={classes.materialImageTextContainer}>
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}${ascensionLegend.commonMat[row.ascLevel]}`)} arrow placement="top">
                                                    <img className={classes.materialImage} style={commonMatBackgroundImageLegend(row.ascLevel)} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}${ascensionLegend.commonMat[row.ascLevel]}.png`).default} alt={commonMat} />
                                                </MaterialTooltip>
                                                <span className={classes.materialCount}>{row.quantity[3]}</span>
                                            </span>
                                        </React.Fragment> : <Typography style={{ textAlign: "center" }}>———</Typography>
                                    }
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="left" style={{ width: "55%" }}>
                                    {row.ascLevel !== "1-20" ?
                                        <React.Fragment>
                                            {row.total[4] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background4star + ")" }} src={require(`../../assets/materials/boss_mats/${bossMat.split(" ").join("_")}.png`).default} alt={bossMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[4]}</span>
                                                </span>
                                            }
                                            {row.total[5] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={localMat} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background1star + ")" }} src={require(`../../assets/materials/local_specialties/${localMat.split(" ").join("_")}.png`).default} alt={localMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[5]}</span>
                                                </span>
                                            }
                                            {row.total[0] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatGemstone(`${element}_Sliver`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background2star + ")" }} src={require(`../../assets/materials/ascension_gems/${element}_Sliver.png`).default} alt={element} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[0]}</span>
                                                </span>
                                            }
                                            {row.total[1] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatGemstone(`${element}_Fragment`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background3star + ")" }} src={require(`../../assets/materials/ascension_gems/${element}_Fragment.png`).default} alt={element} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[1]}</span>
                                                </span>
                                            }
                                            {row.total[2] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatGemstone(`${element}_Chunk`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background4star + ")" }} src={require(`../../assets/materials/ascension_gems/${element}_Chunk.png`).default} alt={element} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[2]}</span>
                                                </span>
                                            }
                                            {row.total[3] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatGemstone(`${element}_Gemstone`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../assets/materials/ascension_gems/${element}_Gemstone.png`).default} alt={element} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[3]}</span>
                                                </span>
                                            }
                                            {row.total[6] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background1star + ")" }} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}1.png`).default} alt={commonMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[6]}</span>
                                                </span>
                                            }
                                            {row.total[7] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background2star + ")" }} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}2.png`).default} alt={commonMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[7]}</span>
                                                </span>
                                            }
                                            {row.total[8] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background3star + ")" }} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}1.png`).default} alt={commonMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[8]}</span>
                                                </span>
                                            }
                                        </React.Fragment> : <Typography style={{ textAlign: "center" }}>———</Typography>
                                    }
                                </StyledTableCell>
                            </StyledTableAlternatingRows>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}

export default AscensionTable;