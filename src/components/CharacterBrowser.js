import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/fetchCharacters";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ListIcon from "@material-ui/icons/List";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import Filters from "./Filters";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "-40px",
    },
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

const filterCharacters = (characters, filters, searchValue) => {
    let chars = [...characters];
    if (filters.element.length > 0) {
        chars = chars.filter(char => filters.element.includes(char.element));
    }
    if (filters.weapon.length > 0) {
        chars = chars.filter(char => filters.weapon.includes(char.weapon));
    }
    if (filters.rarity.length > 0) {
        chars = chars.filter(char => filters.rarity.includes(char.rarity));
    }
    if (filters.talent.length > 0) {
        chars = chars.filter(char => filters.talent.includes(char.materials.talentBook));
    }
    if (filters.bossMat.length > 0) {
        chars = chars.filter(char => filters.bossMat.includes(char.materials.bossMat));
    }
    if (filters.localMat.length > 0) {
        chars = chars.filter(char => filters.localMat.includes(char.materials.localMat));
    }
    if (filters.nation.length > 0) {
        chars = chars.filter(char => filters.nation.includes(char.nation));
    }
    if (searchValue !== "") {
        chars = chars.filter(char => char.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return chars
}

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
                    {!checked ?
                        (<Grid container className={classes.root}>
                            {characters.characters.length > 0 ? filterCharacters(characters.characters, filters, searchValue).map(char => <CharacterCard key={char.id} character={char} />) : null}
                        </Grid>)
                        :
                        <CharacterList characters={filterCharacters(characters.characters, filters, searchValue)} />
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