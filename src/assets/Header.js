import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Suggestions from './Suggestions';
// Hooks
import useForceUpdate from '../hooks/useForceUpdate';
import useRequest from '../hooks/useRequest';
// Styling
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  clearButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const forceUpdate = useForceUpdate();
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isEmptyState, setIsEmptyState] = useState(true);
  const [isAddTripState, setIsAddTripState] = useState(false);

  const { data } = useRequest(
    `https://imdb-api.com/en/API/Search/k_5L8PB42u/${query}`
  );
  console.log('data', data);
  function findMatches(wordToMatch, data) {
    return data.filter((movie) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return movie.title.match(regex);
    });
  }

  const displayMatches = (e) => {
    console.log(data);
    const matchArray = findMatches(query, data);
    matchArray
      .map((movie) => {
        setResults([movie]);

        return movie.title;
      })
      .join('');
    setIsEmptyState(false);
    setIsAddTripState(true);
  };

  const handleClose = (e) => {
    setIsEmptyState(true);
    setIsAddTripState(false);
    setResults([]);
    setQuery('');
  };

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            <Link component={RouterLink} to='/' underline='none'>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
                startIcon={<HomeIcon />}
                onClick={(forceUpdate, handleClose)}
              >
                Home{' '}
              </Button>
            </Link>
          </Typography>
          <Button color='secondary' onClick={handleClose}>
            Clear
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder='Search…'
              onChange={(event) => handleOnChange(event)}
              onKeyUp={displayMatches}
              onKeyDown={displayMatches}
              value={query}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {isAddTripState && (
        <Grid container spacing={4}>
          {' '}
          <Suggestions results={results} />{' '}
        </Grid>
      )}
    </div>
  );
}
