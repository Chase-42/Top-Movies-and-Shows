import React, { Fragment } from 'react';
import SuggestionItem from './SuggestionItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: '2rem',
    marginRight: '2.5rem',
    width: 'inherit',
  },
}));

const Suggestions = ({ results }) => {
  const classes = useStyles();
  console.log(results);
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction='column'
          justify='space-evenly'
          alignItems='flex-end'
        >
          {results.map((item) => {
            return <SuggestionItem movie={item} key={item.id} />;
          })}
        </Grid>
      </div>
    </Fragment>
  );
};

export default Suggestions;
