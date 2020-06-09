import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './assets/Home';
import Series from './assets/Series';
import Movies from './assets/Movies';
import Header from './assets/Header';
import Footer from './assets/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <CssBaseline />
        <Container maxWidth='xl'>
          <Route exact path='/' component={Home} />
          <Route exact path='/series' component={Series} />
          <Route exact path='/movie' component={Movies} />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}
