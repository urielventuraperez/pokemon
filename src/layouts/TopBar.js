import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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

const TopBar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [isBack, setIsBack] = React.useState(false);

  React.useEffect(() => {
    history.action !== 'POP' ? setIsBack(true) : setIsBack(false)
  }, [])
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isBack && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={ () => history.goBack() }
              aria-label="menu"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Link component={RouterLink} to={'/'} variant="h6" className={classes.title}>
            {`${APP_TITLE}`}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
