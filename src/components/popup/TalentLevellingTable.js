import React from "react";
import { makeStyles, Typography, TableContainer, Table, TableHead, TableBody } from "@material-ui/core";
import { StyledTableCell, StyledTableAlternatingRows } from "../../helpers/StyledTable";
import { formatCommonMats, formatTalents, formatWeeklyBossMats } from "../../helpers/TooltipText";
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
        marginRight: "25px",
        backgroundColor: "rgb(36, 41, 56)",
        backgroundSize: "100%",
    },
    materialCount: {
        position: "absolute",
        left: "52px",
    },
    talentLevelTableDisplay: {
        overflowY: "auto",
        height: "650px",
    },
}));

const ascensionLegend = {
    commonMat: {
        "2": "1",
        "3": "2",
        "4": "2",
        "5": "2",
        "6": "2",
        "7": "3",
        "8": "3",
        "9": "3",
        "10": "3"
    },
    talent: {
        "2": "1",
        "3": "2",
        "4": "2",
        "5": "2",
        "6": "2",
        "7": "3",
        "8": "3",
        "9": "3",
        "10": "3"
    }
}

const commonMatBackgroundImageLegend = (level) => {
    switch (level) {
        case "2":
            return { backgroundImage: "url(" + background1star + ")" }
        case "3":
        case "4":
        case "5":
        case "6":
            return { backgroundImage: "url(" + background2star + ")" }
        case "7":
        case "8":
        case "9":
        case "10":
            return { backgroundImage: "url(" + background3star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const talentBackgroundImageLegend = (level) => {
    switch (level) {
        case "2":
            return { backgroundImage: "url(" + background2star + ")" }
        case "3":
        case "4":
        case "5":
        case "6":
            return { backgroundImage: "url(" + background3star + ")" }
        case "7":
        case "8":
        case "9":
        case "10":
            return { backgroundImage: "url(" + background4star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const createRow = (talentLevel, quantity, total) => {
    return { talentLevel, quantity, total }
}

const TalentLevellingTable = (props) => {
    const classes = useStyles();
    let { talentBook, weeklyBossMat, commonMat } = props.character.materials;

    const talentLevels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const materialQuantity = [["0", "0", "0", "0"], ["6", "3", "0", "0"], ["3", "2", "0", "0"], ["4", "4", "0", "0"], ["6", "6", "0", "0"], ["9", "9", "0", "0"], ["4", "4", "1", "0"], ["6", "6", "1", "0"], ["9", "12", "2", "0"], ["12", "16", "2", "1"]]
    const totalMaterialQuantity = [["0", "0", "0", "0", "0", "0", "0", "0"], ["6", "0", "0", "3", "0", "0", "0", "0"], ["6", "3", "0", "3", "2", "0", "0", "0"], ["6", "7", "0", "3", "6", "0", "0", "0"], ["6", "13", "0", "3", "12", "0", "0", "0"], ["6", "22", "0", "3", "21", "0", "0", "0"], ["6", "22", "4", "3", "21", "4", "1", "0"], ["6", "22", "10", "3", "21", "10", "2", "0"], ["6", "22", "19", "3", "21", "22", "4", "0"], ["6", "22", "31", "3", "21", "38", "6", "1"]]

    const talentLevelRows = talentLevels.map((level, index) => createRow(level, materialQuantity[index], totalMaterialQuantity[index]))

    return (
        <div className={classes.talentLevelTableDisplay}>
            <TableContainer>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <StyledTableAlternatingRows>
                            <StyledTableCell className={classes.genshinFont} align="center">Talent Level</StyledTableCell>
                            <StyledTableCell className={classes.genshinFont} align="center">Materials</StyledTableCell>
                            <StyledTableCell className={classes.genshinFont} align="center">Total Materials</StyledTableCell>
                        </StyledTableAlternatingRows>
                    </TableHead>
                    <TableBody>
                        {talentLevelRows.map((row) => (
                            <StyledTableAlternatingRows key={row.talentLevel}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.talentLevel}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="left">
                                    {row.talentLevel !== "1" ?
                                        <React.Fragment>
                                            {row.quantity[0] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatCommonMats(`${commonMat}${ascensionLegend.commonMat[row.talentLevel]}`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={commonMatBackgroundImageLegend(row.talentLevel)} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}${ascensionLegend.commonMat[row.talentLevel]}.png`).default} alt={commonMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.quantity[0]}</span>
                                                </span>
                                            }
                                            {row.quantity[1] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatTalents(`${talentBook}${ascensionLegend.talent[row.talentLevel]}`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={talentBackgroundImageLegend(row.talentLevel)} src={require(`../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}${ascensionLegend.talent[row.talentLevel]}.png`).default} alt={talentBook} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.quantity[1]}</span>
                                                </span>
                                            }
                                            {row.quantity[2] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatWeeklyBossMats(`${weeklyBossMat}`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../assets/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`).default} alt={weeklyBossMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.quantity[2]}</span>
                                                </span>
                                            }
                                            {row.quantity[3] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title="Crown of Insight" arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../assets/materials/talent_mats/Crown_of_Insight.png`).default} alt="Crown of Insight" />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.quantity[3]}</span>
                                                </span>
                                            }
                                        </React.Fragment> : <Typography style={{ textAlign: "center" }}>———</Typography>
                                    }
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="left">
                                    {row.talentLevel !== "1" ?
                                        <React.Fragment>
                                            {row.total[0] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background1star + ")" }} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}1.png`).default} alt={commonMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[0]}</span>
                                                </span>
                                            }
                                            {row.total[1] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background2star + ")" }} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}2.png`).default} alt={commonMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[1]}</span>
                                                </span>
                                            }
                                            {row.total[2] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background3star + ")" }} src={require(`../../assets/materials/common_mats/${commonMat.split(" ").join("_")}3.png`).default} alt={commonMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[2]}</span>
                                                </span>
                                            }
                                            {row.total[3] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatTalents(`${talentBook}1`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background2star + ")" }} src={require(`../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}1.png`).default} alt={talentBook} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[3]}</span>
                                                </span>
                                            }
                                            {row.total[4] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatTalents(`${talentBook}2`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background3star + ")" }} src={require(`../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}2.png`).default} alt={talentBook} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[4]}</span>
                                                </span>
                                            }
                                            {row.total[5] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatTalents(`${talentBook}3`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background4star + ")" }} src={require(`../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}3.png`).default} alt={talentBook} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[5]}</span>
                                                </span>
                                            }
                                            {row.total[6] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title={formatWeeklyBossMats(`${weeklyBossMat}`)} arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../assets/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`).default} alt={weeklyBossMat} />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[6]}</span>
                                                </span>
                                            }
                                             {row.total[7] !== "0" &&
                                                <span className={classes.materialImageTextContainer}>
                                                    <MaterialTooltip title="Crown of Insight" arrow placement="top">
                                                        <img className={classes.materialImage} style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../assets/materials/talent_mats/Crown_of_Insight.png`).default} alt="Crown of Insight" />
                                                    </MaterialTooltip>
                                                    <span className={classes.materialCount}>{row.total[7]}</span>
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

export default TalentLevellingTable;