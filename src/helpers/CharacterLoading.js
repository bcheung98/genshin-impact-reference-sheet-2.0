import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: "-455px",
        textAlign: "center",

    },
    genshinFont: {
        fontFamily: "Genshin, sans-serif",
        fontSize: "18pt",
        color: "white",
    },
    loadingImage: {
        marginTop: "15px",
    },
    errorImage: {
        marginTop: "15px",
        height: "256px",
    }
}));

const CharacterLoading = () => {
    const classes = useStyles();

    const [fail, setFail] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setFail(!fail);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={classes.root}>
            {
                !fail ?
                    <React.Fragment>
                        <Typography className={classes.genshinFont}>Loading...</Typography>
                        <img src={require("../assets/emotes/loading.webp").default} alt="Loading" className={classes.loadingImage} />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Typography className={classes.genshinFont}>Something went wrong</Typography>
                        <img src={require(`../assets/emotes/error${Math.floor(Math.random() * 9) + 1}.png`).default} alt="Loading" className={classes.errorImage} />
                    </React.Fragment>
            }
        </div>
    )
}

export default CharacterLoading;