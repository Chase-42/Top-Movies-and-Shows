import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media: {
    height: 250,
    width: 180,
  },
}));

export default function MovieItem({ movie }) {
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={6} lg={2}>
        <Card className={classes.root}>
          <div className='hvr-float'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {movie.title}
              </Typography>
              <CardMedia
                className={classes.media}
                image={movie.images['Poster Art'].url}
                title='Paella dish'
              />
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Release Year: {movie.releaseYear}
                </Typography>
                <Typography paragraph>
                  Description: {movie.description}
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        </Card>
      </Grid>
    </Fragment>
  );
}
