import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/fetchCharacters";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Filters from "./Filters";
import CharacterCard from "./CharacterCard";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto"
    }
}));

const filterCharacters = (characters, filters) => {
    let chars = [...characters];
    if (filters.element.length > 0) {
        chars = chars.filter(char => filters.element.includes(char.element));
    }
    if (filters.weapon.length > 0) {
        chars = chars.filter(char => filters.weapon.includes(char.weapon));
    }
    if (filters.talent.length > 0) {
        chars = chars.filter(char => filters.talent.includes(char.materials.talentBook));
    }
    if (filters.bossMat.length > 0) {
        chars = chars.filter(char => filters.bossMat.includes(char.materials.bossMat));
    }
    if (filters.nation.length > 0) {
        chars = chars.filter(char => filters.nation.includes(char.nation));
    }
    if (filters.rarity.length > 0) {
        chars = chars.filter(char => filters.rarity.includes(char.rarity));
    }
    return chars
}

const CharacterBrowser = (props) => {
    const classes = useStyles();

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { characters, fetchCharacters, filters } = props

    return (
        <React.Fragment>
            <Filters />
            <Grid container className={classes.root}>
                {characters.characters.length > 0 ? filterCharacters(characters.characters, filters).map(char => <CharacterCard key={char.id} character={char} />) : null}
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        filters: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterBrowser);