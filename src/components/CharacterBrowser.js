import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/fetchCharacters";

import CharacterCard from "./CharacterCard";

const CharacterBrowser = (props) => {

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { characters, fetchCharacters } = props

    return (
        <div>
            {characters.characters.length > 0 ? characters.characters.map(char => <CharacterCard key={char.id} character={char} />) : null}
        </div>
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