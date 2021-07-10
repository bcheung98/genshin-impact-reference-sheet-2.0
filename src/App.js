import './App.css';
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { props } from 'bluebird';

const useStyles = makeStyles((theme) => ({
    headerBar: {
        textAlign: "center",
        padding: 10
    },
    footerBar: {
        top: "auto",
        bottom: 0,
        padding: 10,
        textAlign: "center"
    }
}))

const App = (props) => {
    const classes = useStyles();

    useEffect(() => {
        fetch("https://bcheung98.github.io/genshin-impact-character-db/characters.json")
            .then(res => res.json())
            .then(chars => props.fetchCharacters(chars))
    }, [])
    return (
        <Router>
            <AppBar position="static" className={classes.headerBar}>
                <Typography variant="h4">Genshin Impact Reference Sheet</Typography>
            </AppBar>
            <AppBar position="fixed" className={classes.footerBar}>
                <Typography variant="subtitle2">Genshin Impact™ is a registered trademark of MiHoYo Co., Ltd.</Typography>
                <Typography variant="subtitle2">Images and data ©MiHoYo Co., Ltd.</Typography>
                <Typography variant="subtitle2">This website was made for my own education and research into making React applications.</Typography>
            </AppBar>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: (characters) => dispatch({ type: "GET_CHARS", characters })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
