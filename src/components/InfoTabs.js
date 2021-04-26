import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
           {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const InfoTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Información del Pokemon"
        className={classes.tabs}
      >
        <Tab label="Acerca" {...a11yProps(0)} />
        <Tab label="Estadísticas" {...a11yProps(1)} />
        <Tab label="Movimientos" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {
        Object.entries(props.pokeAbout).map(([key,value]) => (
            <Typography key={key} variant="caption" display="block" gutterBottom>
              {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}: {value.toString()}
            </Typography>
        ))
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
      {
        Object.entries(props.species).map(([key,value]) => (
            <Typography key={key} variant="caption" display="block" gutterBottom>
              {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}: {value.toString()}
            </Typography>
        ))
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box display="flex" flexDirection="column" flexWrap="wrap">
        {
          props.moves.map(move => (
            <Typography key={move.move.name} variant="caption" display="block" gutterBottom>
            {`${move.move.name.charAt(0).toUpperCase()}${move.move.name.slice(1)} | `}
            </Typography>  
          ))
        }
        </Box>
      </TabPanel>
    </div>
  );
}

export default InfoTabs;