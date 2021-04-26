import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: "1rem",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  return (
      <Box display="flex" flexDirection="column" className={classes.margin}>
      <FormControl className={clsx(classes.margin)}>
        <Autocomplete
          freeSolo
          disableClearable
          options={props.all.map((pokemon) => pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Pokemon"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </FormControl>
      <Button
        className={classes.margin}
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Buscar
      </Button>
    </Box>
  );
};

export default Search;
