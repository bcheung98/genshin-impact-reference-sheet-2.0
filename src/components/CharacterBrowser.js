import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/fetchCharacters";

const CharacterBrowser = (props) => {

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { characters, fetchCharacters } = props

    return (
        <div>
            {console.log(characters)}
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