import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";
import { filterCharacters } from "../helpers/FilterCharacters";

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: "-40px",
    },
}));

const CharacterBrowserDisplay = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {!props.checked ?
                <Grid container className={classes.root}>
                    {filterCharacters(props.characters, props.filters, props.searchValue).map(char => <CharacterCard key={char.id} character={char} />)}
                </Grid>
                :
                <CharacterList characters={filterCharacters(props.characters, props.filters, props.searchValue)} />
            }
        </React.Fragment>
    )
}

export default CharacterBrowserDisplay;