import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { APP_TITLE } from "../utils/environments";
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link component={RouterLink} to={'/'} variant="h4" className={classes.title}>
            {`${APP_TITLE}`}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
