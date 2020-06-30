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
    marginTop: 5,
    marginBottom: 5,
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
    height: '40rem',
    [theme.breakpoints.down('lg')]: {
      height: '36rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '31rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '36rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '48rem',
    },
  },
}));

export default function SuggestionItem({ movie }) {
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();
  console.log(movie);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {movie.title}
            </Typography>
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
                Description: {movie.description}
              </Typography>
              <CardMedia
                className={classes.media}
                image={movie.image}
                title='Paella dish'
              />
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Fragment>
  );
}
