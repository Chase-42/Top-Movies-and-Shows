import React, { Fragment } from 'react';
import MovieItem from './MovieItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    display: 'flex',
  },
}));

const Suggestions = ({ results }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction='column-reverse'
          justify='space-evenly'
          alignItems='flex-end'
        >
          {results.map((item) => {
            return <MovieItem movie={item} key={item.title} />;
          })}
        </Grid>
      </div>
    </Fragment>
  );
};

export default Suggestions;
