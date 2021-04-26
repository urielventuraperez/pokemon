import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import colors from '../theme/typeColors';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 20,
    backgroundImage: `url(/static/images/pokecard-bg.jpg)`,
    backgroundColor: types => colors[types[0].type.name] || '#fff',
    backgroundBlendMode: 'color-burn',
    backgroundSize: 'cover'
  },
  image: {
    objectFit: 'contain'
  },
  name: {
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: '700'
  },
  types: {
    color: types => colors[types[0].type.name] || 'white',
    marginRight: '0.4rem',
    backgroundColor: 'white',
    textTransform: 'capitalize',
    fontWeight: '500',
    borderColor: 'black'
  }
});

const Pokecard = ({name, image, types}) => {
  const classes = useStyles(types);

  return (
    <Link
      component={RouterLink}
      to={`/pokemon/${name}`}>
    <Card
      className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          alt={name}
          height="140"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="h4" component="h2">
            { name }
          </Typography>

          {
            types.map( t => (
              <Chip className={classes.types} key={t.slot} label={t.type.name} />
            ))
          }

        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

export default Pokecard;