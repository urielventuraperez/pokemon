import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Pokecardbg from '../assets/images/pokeball_pattern.jpg';
import colors from '../theme/typeColors';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 20,
    backgroundImage: `url(${Pokecardbg})`,
    backgroundColor: types => colors[types[0].type.name] || '#fff',
    backgroundBlendMode: 'luminosity'
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
    backgroundColor: types => colors[types[0].type.name] || '#fff',
    marginRight: '0.4rem',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: '500'
  }
});

const Pokecard = ({name, image, types}) => {
  const classes = useStyles(types);

  return (
    <Card className={classes.root}>
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
  );
}

export default Pokecard;