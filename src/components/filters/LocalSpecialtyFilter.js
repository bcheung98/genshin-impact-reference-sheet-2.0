import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FilterTooltip } from "../../helpers/FilterTooltip";

let mondstadtIcon = require("../../assets/nations/Mondstadt.png").default;
let callaLilyIcon = require("../../assets/materials/local_specialties/Calla_Lily.png").default;
let ceciliaIcon = require("../../assets/materials/local_specialties/Cecilia.png").default;
let dandelionIcon = require("../../assets/materials/local_specialties/Dandelion_Seed.png").default;
let philanemoIcon = require("../../assets/materials/local_specialties/Philanemo_Mushroom.png").default;
let lampGrassIcon = require("../../assets/materials/local_specialties/Small_Lamp_Grass.png").default;
let valberryIcon = require("../../assets/materials/local_specialties/Valberry.png").default;
let asterIcon = require("../../assets/materials/local_specialties/Windwheel_Aster.png").default;
let wolfhookIcon = require("../../assets/materials/local_specialties/Wolfhook.png").default;

let liyueIcon = require("../../assets/nations/Liyue.png").default;
let corLapisIcon = require("../../assets/materials/local_specialties/Cor_Lapis.png").default;
let glazeLilyIcon = require("../../assets/materials/local_specialties/Glaze_Lily.png").default;
let chiliIcon = require("../../assets/materials/local_specialties/Jueyun_Chili.png").default;
let jadeIcon = require("../../assets/materials/local_specialties/Noctilucous_Jade.png").default;
let qingxinIcon = require("../../assets/materials/local_specialties/Qingxin.png").default;
let silkIcon = require("../../assets/materials/local_specialties/Silk_Flower.png").default;
let starconchIcon = require("../../assets/materials/local_specialties/Starconch.png").default;
let violetgrassIcon = require("../../assets/materials/local_specialties/Violetgrass.png").default;

let inazumaIcon = require("../../assets/nations/Inazuma.png").default;
let amakumoIcon = require("../../assets/materials/local_specialties/Amakumo_Fruit.png").default;
let marrowIcon = require("../../assets/materials/local_specialties/Crystal_Marrow.png").default;
let dendrobiumIcon = require("../../assets/materials/local_specialties/Dendrobium.png").default;
let fluoFungusIcon = require("../../assets/materials/local_specialties/Fluorescent_Fungus.png").default;
let nakuIcon = require("../../assets/materials/local_specialties/Naku_Weed.png").default;
let onikabutoIcon = require("../../assets/materials/local_specialties/Onikabuto.png").default;
let sakuraIcon = require("../../assets/materials/local_specialties/Sakura_Bloom.png").default;
let pearlIcon = require("../../assets/materials/local_specialties/Sango_Pearl.png").default;
let ganodermaIcon = require("../../assets/materials/local_specialties/Sea_Ganoderma.png").default;

let sumeruIcon = require("../../assets/nations/Sumeru.png").default;
let kalpalataLotusIcon = require("../../assets/materials/local_specialties/Kalpalata_Lotus.png").default;
let nilotpalaLotusIcon = require("../../assets/materials/local_specialties/Nilotpala_Lotus.png").default;
let padisarahIcon = require("../../assets/materials/local_specialties/Padisarah.png").default;
let redcrestIcon = require("../../assets/materials/local_specialties/Redcrest.png").default;
let rukkhashavaIcon = require("../../assets/materials/local_specialties/Rukkhashava_Mushrooms.png").default;
let scarabIcon = require("../../assets/materials/local_specialties/Scarab.png").default;

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        width: "99%",
    },
    filter: {
        display: "flex",
    },
    text: {
        fontFamily: "Genshin, sans-serif",
        marginTop: "12px",
        marginLeft: "5px",
    },
    subBar: {
        color: "white",
        backgroundColor: "rgb(36, 41, 56)",
    },
    summary: {
        backgroundColor: "rgb(44, 49, 64)",
        color: "white",
        textAlign: "center",
        fontFamily: "Genshin, sans-serif",
    },
    filterRow: {
        margin: "5px",
        padding: 0
    },
    nationIcon: {
        marginLeft: "-7px",
        marginRight: "10px",
        height: "32px",
    },
}));


const LocalMatFilter = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.nationIcon} src={mondstadtIcon} alt="Mondstadt" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Mondstadt</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <FilterTooltip title="Calla Lily" arrow placement="top">
                            <img className="filter-off" id="calla lily-button" src={callaLilyIcon} alt="Calla Lily" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Cecilia" arrow placement="top">
                            <img className="filter-off" id="cecilia-button" src={ceciliaIcon} alt="Cecilia" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Dandelion Seed" arrow placement="top">
                            <img className="filter-off" id="dandelion seed-button" src={dandelionIcon} alt="Dandelion Seed" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Philanemo Mushroom" arrow placement="top">
                            <img className="filter-off" id="philanemo mushroom-button" src={philanemoIcon} alt="Philanemo Mushroom" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Small Lamp Grass" arrow placement="top">
                            <img className="filter-off" id="small lamp grass-button" src={lampGrassIcon} alt="Small Lamp Grass" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Valberry" arrow placement="top">
                            <img className="filter-off" id="valberry-button" src={valberryIcon} alt="Valberry" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Windwheel Aster" arrow placement="top">
                            <img className="filter-off" id="windwheel aster-button" src={asterIcon} alt="Windwheel Aster" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Wolfhook" arrow placement="top">
                            <img className="filter-off" id="wolfhook-button" src={wolfhookIcon} alt="Wolfhook" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.nationIcon} src={liyueIcon} alt="Liyue" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Liyue</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <FilterTooltip title="Cor Lapis" arrow placement="top">
                            <img className="filter-off" id="cor lapis-button" src={corLapisIcon} alt="Cor Lapis" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Glaze Lily" arrow placement="top">
                            <img className="filter-off" id="glaze lily-button" src={glazeLilyIcon} alt="Glaze Lily" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Jueyun Chili" arrow placement="top">
                            <img className="filter-off" id="jueyun chili-button" src={chiliIcon} alt="Jueyun Chili" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Noctilucous Jade" arrow placement="top">
                            <img className="filter-off" id="noctilucous jade-button" src={jadeIcon} alt="Noctilucous Jade" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Qingxin" arrow placement="top">
                            <img className="filter-off" id="qingxin-button" src={qingxinIcon} alt="Qingxin" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Silk Flower" arrow placement="top">
                            <img className="filter-off" id="silk flower-button" src={silkIcon} alt="Silk Flower" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Starconch" arrow placement="top">
                            <img className="filter-off" id="starconch-button" src={starconchIcon} alt="Starconch" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Violetgrass" arrow placement="top">
                            <img className="filter-off" id="violetgrass-button" src={violetgrassIcon} alt="Violetgrass" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.nationIcon} src={inazumaIcon} alt="Inazuma" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Inzauma</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <FilterTooltip title="Amakumo Fruit" arrow placement="top">
                            <img className="filter-off" id="amakumo fruit-button" src={amakumoIcon} alt="Amakumo Fruit" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Crystal Marrow" arrow placement="top">
                            <img className="filter-off" id="crystal marrow-button" src={marrowIcon} alt="Crystal Marrow" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Dendrobium" arrow placement="top">
                            <img className="filter-off" id="dendrobium-button" src={dendrobiumIcon} alt="Dendrobium" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Fluorescent Fungus" arrow placement="top">
                            <img className="filter-off" id="fluorescent fungus-button" src={fluoFungusIcon} alt="Fluorescent Fungus" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Naku Weed" arrow placement="top">
                            <img className="filter-off" id="naku weed-button" src={nakuIcon} alt="Naku Weed" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Onikabuto" arrow placement="top">
                            <img className="filter-off" id="onikabuto-button" src={onikabutoIcon} alt="Onikabuto" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Sakura Bloom" arrow placement="top">
                            <img className="filter-off" id="sakura bloom-button" src={sakuraIcon} alt="Sakura Bloom" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Sango Pearl" arrow placement="top">
                            <img className="filter-off" id="sango pearl-button" src={pearlIcon} alt="Sango Pearl" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Sea Ganoderma" arrow placement="top">
                            <img className="filter-off" id="sea ganoderma-button" src={ganodermaIcon} alt="Sea Ganoderma" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.nationIcon} src={sumeruIcon} alt="Sumeru" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Sumeru</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <FilterTooltip title="Kalpalata Lotus" arrow placement="top">
                            <img className="filter-off" id="kalpalata lotus-button" src={kalpalataLotusIcon} alt="Kalpalata Lotus" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Nilotpala Lotus" arrow placement="top">
                            <img className="filter-off" id="nilotpala lotus-button" src={nilotpalaLotusIcon} alt="Nilotpala Lotus" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Padisarah" arrow placement="top">
                            <img className="filter-off" id="padisarah-button" src={padisarahIcon} alt="Padisarah" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Redcrest" arrow placement="top">
                            <img className="filter-off" id="redcrest-button" src={redcrestIcon} alt="Redcrest" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Rukkhashava Mushrooms" arrow placement="top">
                            <img className="filter-off" id="rukkhashava mushrooms-button" src={rukkhashavaIcon} alt="Rukkhashava Mushrooms" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Scarab" arrow placement="top">
                            <img className="filter-off" id="scarab-button" src={scarabIcon} alt="Scarab" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_LOCAL_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(LocalMatFilter);