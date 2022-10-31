import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/fetchCharacters";
import { makeStyles, Grid, FormControlLabel, Switch, Paper, InputBase } from "@material-ui/core";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ListIcon from "@material-ui/icons/List";
import Filters from "./filters/Filters";
import CharacterBrowserDisplay from "./CharacterBrowserDisplay";
import CharacterLoading from "../helpers/CharacterLoading";

const useStyles = makeStyles((theme) => ({
    buttonGroup: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
    },
    switch: {
        marginLeft: "20px",
    },
    toggleIcon: {
        color: "white",
    },
    inputRoot: {
        border: "2px solid gray",
        borderRadius: "5px",
        backgroundColor: "rgb(44, 49, 64)",
        display: "flex",
        margin: "auto",
        height: "40px",
        width: "84%",
        marginTop: "10px",
        marginLeft: "20px",
    },
    inputTextField: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "white",
        fontFamily: "Genshin, sans-serif",
    },
}));

const CharacterBrowser = (props) => {
    const classes = useStyles();

    useEffect(() => {
        fetchCharacters();
    }, [])

    const [checked, setChecked] = React.useState(false);
    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const [searchValue, setSearchValue] = React.useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    let { characters, fetchCharacters, filters } = props;

    return (
        <React.Fragment>
            <div className={classes.buttonGroup}>
                <ViewComfyIcon className={classes.toggleIcon} fontSize="large" />
                <FormControlLabel
                    control={
                        <Switch
                            color="primary"
                            onChange={toggleChecked}
                            checked={checked}
                            className={classes.switch}
                        />
                    }
                />
                <ListIcon className={classes.toggleIcon} fontSize="large" />
            </div>
            <Grid container>
                <Grid item xs={3}>
                    <Paper className={classes.inputRoot}>
                        <InputBase
                            className={classes.inputTextField}
                            placeholder="Search"
                            onChange={handleInputChange}
                        />
                    </Paper>
                    <Filters />
                </Grid>
                <Grid item xs={9}>
                    {characters.characters.length > 0 ?
                        <CharacterBrowserDisplay characters={characters.characters} filters={filters} searchValue={searchValue} checked={checked} /> : <CharacterLoading />
                    }
                </Grid>
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