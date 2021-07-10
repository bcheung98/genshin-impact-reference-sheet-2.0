import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/fetchCharacters";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CharacterCard from "./CharacterCard";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto"
    }
}));

const CharacterBrowser = (props) => {

    const classes = useStyles();

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { characters, fetchCharacters } = props

    return (
        <Grid container className={classes.root} spacing={3}>
            {characters.characters.length > 0 ? characters.characters.map(char => <CharacterCard key={char.id} character={char} />) : null}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CharacterBrowser));