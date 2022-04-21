import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let stormterrorIcon = require("../../assets/bosses/Stormterror_Icon.png").default;
let clawIcon = require("../../assets/materials/boss_mats/Dvalin's_Claw.png").default;
let plumeIcon = require("../../assets/materials/boss_mats/Dvalin's_Plume.png").default;
let sighIcon = require("../../assets/materials/boss_mats/Dvalin's_Sigh.png").default;

let andriusIcon = require("../../assets/bosses/Andrius_Icon.png").default;
let ringIcon = require("../../assets/materials/boss_mats/Ring_of_Boreas.png").default;
let locketIcon = require("../../assets/materials/boss_mats/Spirit_Locket_of_Boreas.png").default;
let tailIcon = require("../../assets/materials/boss_mats/Tail_of_Boreas.png").default;

let childeIcon = require("../../assets/bosses/Childe_Icon.png").default;
let shadowIcon = require("../../assets/materials/boss_mats/Shadow_of_the_Warrior.png").default;
let shardIcon = require("../../assets/materials/boss_mats/Shard_of_a_Foul_Legacy.png").default;
let tuskIcon = require("../../assets/materials/boss_mats/Tusk_of_Monoceros_Caeli.png").default;

let azhdahaIcon = require("../../assets/bosses/Azhdaha_Icon.png").default;
let branchIcon = require("../../assets/materials/boss_mats/Bloodjade_Branch.png").default;
let crownIcon = require("../../assets/materials/boss_mats/Dragon_Lord's_Crown.png").default;
let scaleIcon = require("../../assets/materials/boss_mats/Gilded_Scale.png").default;

let signoraIcon = require("../../assets/bosses/La_Signora_Icon.png").default;
let heartIcon = require("../../assets/materials/boss_mats/Ashen_Heart.png").default;
let butterflyIcon = require("../../assets/materials/boss_mats/Hellfire_Butterfly.png").default;
let momentIcon = require("../../assets/materials/boss_mats/Molten_Moment.png").default;

let raidenIcon = require("../../assets/bosses/Narukami_no_Mikoto_Icon.png").default;
let mudraIcon = require("../../assets/materials/boss_mats/Mudra_of_the_Malefic_General.png").default;
let tearsIcon = require("../../assets/materials/boss_mats/Tears_of_the_Calamitous_God.png").default;
let aeonsIcon = require("../../assets/materials/boss_mats/The_Meaning_of_Aeons.png").default;

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
    bossIcon: {
        marginLeft: "-7px",
        marginRight: "10px",
        width: "32px",
        border: "2px solid gray",
        borderRadius: "5px",
    },
}));

const BossMatFilter = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.bossIcon} src={stormterrorIcon} alt="Stormterror" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Stormterror</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="dvalin's claw-button" src={clawIcon} alt="Dvalin's Claw" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Dvalin's Claw</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="dvalin's plume-button" src={plumeIcon} alt="Dvalin's Plume" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Dvalin's Plume</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="dvalin's sigh-button" src={sighIcon} alt="Dvalin's Sigh" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Dvalin's Sigh</Typography>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.bossIcon} src={andriusIcon} alt="Lupus Boreas" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Lupus Boreas</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="ring of boreas-button" src={ringIcon} alt="Ring of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Ring of Boreas</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="spirit locket of boreas-button" src={locketIcon} alt="Spirit Locket of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Spirt Locket of Boreas</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="tail of boreas-button" src={tailIcon} alt="Tail of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Tail of Boreas</Typography>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.bossIcon} src={childeIcon} alt="Childe" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Childe</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="shadow of the warrior-button" src={shadowIcon} alt="Shadow of the Warrior" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Shadow of the Warrior</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="shard of a foul legacy-button" src={shardIcon} alt="Shard of a Foul Legacy" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Shard of a Foul Legacy</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="tusk of monoceros caeli-button" src={tuskIcon} alt="Tusk of Monoceros Caeli" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Tusk of Monoceros Caeli</Typography>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.bossIcon} src={azhdahaIcon} alt="Azhdaha" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Azhdaha</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="bloodjade branch-button" src={branchIcon} alt="Bloodjade Branch" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Bloodjade Branch</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="dragon lord's crown-button" src={crownIcon} alt="Dragon Lord's Crown" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Dragon Lord's Crown</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="gilded scale-button" src={scaleIcon} alt="Gilded Scale" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Gilded Scale</Typography>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.bossIcon} src={signoraIcon} alt="La Signora" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>La Signora</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="ashen heart-button" src={heartIcon} alt="Ashen Heart" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Ashen Heart</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="hellfire butterfly-button" src={butterflyIcon} alt="Hellfire Butterfly" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Hellfire Butterfly</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="molten moment-button" src={momentIcon} alt="Molten Moment" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Molten Moment</Typography>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.subBar}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} className={classes.summary} >
                    <div className={classes.filter}>
                        <img className={classes.bossIcon} src={raidenIcon} alt="Narukami no Mikoto" />
                        <Typography variant="h6" style={{ fontFamily: "Genshin" }}>Narukami no Mikoto</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.filterRow}>
                    <div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="mudra of the malefic general-button" src={mudraIcon} alt="Mudra of the Malefic General" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Mudra of the Malefic General</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="tears of the calamitous god-button" src={tearsIcon} alt="Tears of the Calamitous God" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>Tears of the Calamitous God</Typography>
                        </div>
                        <div className={classes.filter}>
                            <img className="filter-off" id="the meaning of aeons-button" src={aeonsIcon} alt="The Meaning of Aeons" onClick={(e) => props.setFilter(e.target.alt)} />
                            <Typography variant="body1" className={classes.text}>The Meaning of Aeons</Typography>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_BOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);