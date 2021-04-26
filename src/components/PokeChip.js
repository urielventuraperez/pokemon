import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import colors from "../theme/typeColors";

const useStyles = makeStyles((theme) => ({
  types: {
    margin: `${theme.spacing(3)}px 0px`,
    color: (props) => colors[props.label] || "#fff",
    backgroundColor: "white",
    border: '1px solid',
    borderColor: (props) => colors[props.label] || "#fff",
    marginRight: "0.4rem",
    textTransform: "capitalize",
    fontWeight: "500",
  },
}));

const PokeChip = (props) => {
  const classes = useStyles(props);
  return <Chip className={classes.types} label={props.label} />;
};

export default PokeChip;
