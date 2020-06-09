import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '400',
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  title: {
    fontSize: 25,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.header}>
        Popular Titles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={11} sm={8} md={6} lg={4}>
          <Card className={classes.paper}>
            <Link to='/movie' component={RouterLink} underline='none'>
              <MovieIcon style={{ fontSize: 150 }} />
              <CardContent>
                <Typography
                  className={classes.title}
                  color='textPrimary'
                  gutterBottom
                >
                  Popular Movies
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4}>
          <Card className={classes.paper}>
            <Link to='/series' component={RouterLink} underline='none'>
              <MovieIcon style={{ fontSize: 150 }} />
              <CardContent>
                <Typography
                  className={classes.title}
                  color='textPrimary'
                  gutterBottom
                >
                  Popular Series
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
