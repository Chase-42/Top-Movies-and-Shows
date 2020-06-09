import React, { Fragment, useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import useRequest from '../hooks/useRequest';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
  },
}));

export default function Movies() {
  const classes = useStyles();

  useEffect(() => {
    const parts = String(window.location.href).split('/');
    const lastSegment = parts.pop() || parts.pop();
    localStorage.clear();
    localStorage.setItem('page', lastSegment);
  }, []);

  const { data, loading, error } = useRequest(
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    'movie'
  );

  if (loading) return <h4>Loading...</h4>;
  if (error.error) return <h4>Oops, something went wrong..</h4>;

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
