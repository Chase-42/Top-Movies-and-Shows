import React, { Fragment, useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import useRequest from '../hooks/useRequest';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  loading: {
    marginTop: 50,
    marginLeft: 20,
    fontWeight: 'bolder',
    fontSize: 40,
  },
  error: {
    marginTop: 50,
    marginLeft: 20,
    fontWeight: 'bolder',
    fontSize: 40,
    color: '#d50000',
  },
}));

export default function Movies() {
  const classes = useStyles();

  const { data, loading, error } = useRequest(
    `https://imdb-api.com/en/API/MostPopularMovies/k_5L8PB42u`
  );

  if (loading) return <h1 className={classes.loading}>Loading...</h1>;
  if (error.error) return;
  <h1 className={classes.error}>
    Oops, something went wrong... {error.error.message}
  </h1>;

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={4}>
          {data.map((item) => {
            return <MovieItem movie={item} key={item.title} />;
          })}
        </Grid>
      </div>
    </Fragment>
  );
}
