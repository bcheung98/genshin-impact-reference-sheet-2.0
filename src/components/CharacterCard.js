import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 325,
        height: 175,
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const CharCardSmall = (props) => {
    const classes = useStyles();
    let { name, rarity, element, weapon } = props.character;
    let { talents, ascensionMat, localMat, commonMat, bossMat } = props.character.materials;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CharCardSmall;