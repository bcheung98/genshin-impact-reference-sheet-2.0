import './App.css';
import React from 'react';
import CharacterBrowser from './components/CharacterBrowser';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    headerBar: {
        marginBottom: 10,
        padding: 10,
        textAlign: "center",
        backgroundImage: "linear-gradient(to right, #2d388a, #0e789b, #2d388a)",
        borderBottom: "2px solid gray",
    },
    genshinFont: {
        fontFamily: "Genshin, sans-serif" 
    },
    footerBar: {
        marginTop: 10,
        padding: 10,
        textAlign: "center",
        backgroundImage: "linear-gradient(to right, #2d388a, #0e789b, #2d388a)",
        borderTop: "2px solid gray",
    }
}))

const App = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static" className={classes.headerBar}>
                <Typography variant="h4" className={classes.genshinFont}>Genshin Impact Reference Sheet</Typography>
            </AppBar>
            <CharacterBrowser />
            <AppBar position="static" className={classes.footerBar}>
                <Typography className={classes.genshinFont} variant="subtitle2">Genshin Impact™ is a registered trademark of MiHoYo Co., Ltd.</Typography>
                <Typography className={classes.genshinFont} variant="subtitle2">Images and data ©MiHoYo Co., Ltd.</Typography>
                <Typography className={classes.genshinFont} variant="subtitle2">This website was made for my own education and research into making React applications.</Typography>
            </AppBar>
        </React.Fragment> 
    );
}

export default App;
