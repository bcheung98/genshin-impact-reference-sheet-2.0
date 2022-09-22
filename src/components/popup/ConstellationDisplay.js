import React from "react";
import parse from "html-react-parser";
import { makeStyles, Typography, Divider, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    genshinFont: {
        fontFamily: "Genshin, sans-serif"
    },
    divider: {
        backgroundColor: "gray",
    },
    constellationDisplay: {
        overflowY: "auto",
        height: "500px",
        paddingRight: "15px",
    },
    avatarHeader: {
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        display: "flex",
        flexDirection: "column",
        marginRight: "15px",
        width: "64px",
        height: "64px",
        border: "2px solid gray",
    },
}));

const ConstellationDisplay = (props) => {
    const classes = useStyles();
    let { name, constellation } = props.character;

    return (
        <div className={classes.constellationDisplay}>
            <div className={classes.avatarHeader}>
                <Avatar alt={constellation.c1.name} src={require(`../../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c1.png`).default} className={classes.avatar} />
                <Typography className={classes.genshinFont} variant="h5">C1 - {constellation.c1.name}</Typography>
            </div>
            <br />
            {parse(constellation.c1.description)}
            <br /><br />
            <Divider className={classes.divider} />
            <br />
            <div className={classes.avatarHeader}>
                <Avatar alt={constellation.c2.name} src={require(`../../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c2.png`).default} className={classes.avatar} />
                <Typography className={classes.genshinFont} variant="h5">C2 - {constellation.c2.name}</Typography>
            </div>
            <br />
            {parse(constellation.c2.description)}
            <br /><br />
            <Divider className={classes.divider} />
            <br />
            <div className={classes.avatarHeader}>
                <Avatar alt={constellation.c3.name} src={require(`../../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c3.png`).default} className={classes.avatar} />
                <Typography className={classes.genshinFont} variant="h5">C3 - {constellation.c3.name}</Typography>
            </div>
            <br />
            {parse(constellation.c3.description)}
            <br /><br />
            <Divider className={classes.divider} />
            <br />
            <div className={classes.avatarHeader}>
                <Avatar alt={constellation.c4.name} src={require(`../../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c4.png`).default} className={classes.avatar} />
                <Typography className={classes.genshinFont} variant="h5">C4 - {constellation.c4.name}</Typography>
            </div>
            <br />
            {parse(constellation.c4.description)}
            <br /><br />
            <Divider className={classes.divider} />
            <br />
            <div className={classes.avatarHeader}>
                <Avatar alt={constellation.c5.name} src={require(`../../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c5.png`).default} className={classes.avatar} />
                <Typography className={classes.genshinFont} variant="h5">C5 - {constellation.c5.name}</Typography>
            </div>
            <br />
            {parse(constellation.c5.description)}
            <br /><br />
            <Divider className={classes.divider} />
            <br />
            <div className={classes.avatarHeader}>
                <Avatar alt={constellation.c6.name} src={require(`../../assets/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c6.png`).default} className={classes.avatar} />
                <Typography className={classes.genshinFont} variant="h5">C6 - {constellation.c6.name}</Typography>
            </div>
            <br />
            {parse(constellation.c6.description)}
        </div>
    )
}

export default ConstellationDisplay;