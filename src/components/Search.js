import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
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
      <Box
        display="flex"
        flexDirection="column"
        className={classes.margin}
      >
        <FormControl className={clsx(classes.margin)}>
          <InputLabel htmlFor="search-pokemon">Pokemon...</InputLabel>
          <Input
            id="search-pokemon"
            type="text"
            variant="filled"
            value=""
            onChange={() => {
              console.log("buscalo");
            }}
          />
        </FormControl>
        <Button 
            className={classes.margin} 
            variant="contained" 
            color="primary" 
            href="#contained-buttons">
          Buscar
        </Button>
      </Box>
  );
};

export default Search;
