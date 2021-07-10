import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import CharacterBrowser from './components/CharacterBrowser';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

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

const App = () => {
    const classes = useStyles();

    return (
        <Router>

            <AppBar position="static" className={classes.headerBar}>
                <Typography variant="h4">Genshin Impact Reference Sheet</Typography>
            </AppBar>

            <Switch>

                <Route exact path="/" component={() => (
                    <Redirect to="/characters" />
                )} />

                <Route path="/characters" component={CharacterBrowser} />

            </Switch>

            <AppBar position="static" className={classes.footerBar}>
                <Typography variant="subtitle2">Genshin Impact™ is a registered trademark of MiHoYo Co., Ltd.</Typography>
                <Typography variant="subtitle2">Images and data ©MiHoYo Co., Ltd.</Typography>
                <Typography variant="subtitle2">This website was made for my own education and research into making React applications.</Typography>
            </AppBar>

        </Router>
    );
}

export default App;
