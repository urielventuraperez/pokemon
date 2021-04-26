import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  input: {
    flex: 1
  },
   button: {
    [theme.breakpoints.up("md")]: {
      marginTop: 15,
      height:58
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [pokemon, setPokemon] = React.useState('');

  return (
    <form>
      <Box display="flex" flexDirection="column" className={clsx(classes.form)}>
      <FormControl className={classes.input}>
        <Autocomplete
          className={classes.input}
          freeSolo
          disableClearable
          onChange={(e, v) => setPokemon(v) }
          options={props.all.map((pokemon) => pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Pokemon"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
              value={pokemon}
            />
          )}
        />
      </FormControl>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => history.push(`pokemon/${pokemon.charAt(0).toLowerCase()}${pokemon.slice(1)}`) }
      >
        Buscar
      </Button>
    </Box>
    </form>
  );
};

export default Search;
